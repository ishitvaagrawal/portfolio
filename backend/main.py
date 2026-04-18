# /**
#  * FastAPI backend for Ishitva Agrawal Portfolio.
#  * Handles contact form submissions via SMTP.
#  */
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

origins = [
    os.getenv("CORS_ORIGIN", "http://localhost:3000")
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactMessage(BaseModel):
    name: str = Field(..., min_length=2)
    email: EmailStr
    message: str = Field(..., min_length=10)

@app.post("/contact")
async def send_contact_email(msg: ContactMessage):
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", 587))
    smtp_user = os.getenv("SMTP_USER")
    smtp_pass = os.getenv("SMTP_PASS")
    to_email = os.getenv("TO_EMAIL")

    if not all([smtp_host, smtp_port, smtp_user, smtp_pass, to_email]):
        raise HTTPException(status_code=500, detail="Server misconfigured: missing SMTP settings")

    # Create the email
    email_msg = MIMEMultipart()
    email_msg['From'] = smtp_user
    email_msg['To'] = to_email
    email_msg['Subject'] = f"Portfolio Contact from {msg.name}"

    body = f"Name: {msg.name}\nEmail: {msg.email}\n\nMessage:\n{msg.message}"
    email_msg.attach(MIMEText(body, 'plain'))

    try:
        # Send the email
        server = smtplib.SMTP(smtp_host, smtp_port)
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.send_message(email_msg)
        server.quit()
        return {"success": True, "message": "Message sent!"}
    except Exception as e:
        print(f"Failed to send email: {e}")
        raise HTTPException(status_code=500, detail="Failed to send message.")
