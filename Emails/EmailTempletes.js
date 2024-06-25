import React from "react";

function EmailTempletes({ otp, username }) {
  return (
    <div class="w-full max-w-screen-md mx-auto">
      <div class="bg-gray-100 p-6 text-center">
        <h1 class="text-3xl text-gray-800">Oyyoo-e-commerce</h1>
      </div>
      <div class="p-6">
        <h2 class="text-2xl text-gray-800">
          Your OTP for Account Verification
        </h2>
        <p>Dear {username},</p>
        <p class="mt-4">
          We are thrilled to welcome you to dynamic, your trusted
          platform for seamless organization and productivity. As part of our
          commitment to ensuring the security of your account, we are delighted
          to provide you with your One-Time Password (OTP) for account
          verification.
        </p>
        <p class="mt-4">
          <strong>Your OTP:</strong> {otp}
        </p>
        <p class="mt-4">
          Please use the above OTP to complete the verification process and gain
          access to your Googla-Keep.com account. We advise you to keep this OTP
          confidential and refrain from sharing it with anyone for security
          reasons.
        </p>
        <p class="mt-4">
          At Googla-Keep.com, we prioritize the protection of your personal
          information and strive to provide you with a secure and reliable
          experience at all times. If you encounter any issues or require
          assistance during the verification process, please do not hesitate to
          contact our support team at support@googla-keep.com.
        </p>
        <p class="mt-4">
          Thank you for choosing oyyos We look forward to serving you
          and helping you stay organized and productive.
        </p>
        <p class="mt-4">
          Warm regards,
          <br />
          Bayzed Bostami & Sumyta Oishi
          <br />
          Customer Support Team
          <br />
          oyyoo.com
        </p>
      </div>
      <div class="bg-gray-100 p-6 text-center">
        <p class="text-sm text-gray-600">
          &copy; 2024 oyyos. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default EmailTempletes;
