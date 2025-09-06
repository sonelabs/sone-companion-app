# SONE Companion App: Real-Time Notifications for Caregivers

The SONE Companion App is a React Native mobile app designed for nursing staff and caregivers. It pairs with the SONE Tablet App, receiving notifications when a patient requests assistance.

![SONE_mobile1](https://github.com/user-attachments/assets/ceae0a1b-2f68-4d17-aa6b-cd76cf6919ca)

![SONE_mobile2](https://github.com/user-attachments/assets/dca35512-bce1-4f2e-8c8c-d16255ca7c7c)

The app streamlines patient–caregiver interaction, making sure patient needs such as “I need water” or “I’m in pain” are instantly routed and relayed to the appropriate staff.

## How It Works

1. **Patient Initiates Request**: Using the tablet app, patients select predefined options.

2. **Push Notification Sent**: The request is transmitted through Firebase Cloud Messaging (FCM).

3. **Caregiver Notification**: The Companion App receives the request as a push notification.

4. **Action**: Staff can view, prioritize, and acknowledge the request directly within the app.
