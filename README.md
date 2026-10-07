# Online Shopping Event System

This project demonstrates how Node.js EventEmitter can be used in an online shopping application to handle different events and allow different services to respond to them.

When an event occurs, the corresponding listeners respond to that event.

## Events and Responding Components

- **userLoggedIn**
  - Email Service sends a welcome email.

- **itemAddedToCart**
  - Inventory Service checks product availability.

- **orderPlaced**
  - Billing Service processes payment.
  - Inventory Service updates stock.
  - Email Service sends order confirmation.
  - Notification Service sends an order notification.

- **paymentFailed**
  - Notification Service sends a payment failure notification.
  - Email Service sends a payment failure email.

- **orderShipped**
  - Notification Service sends a shipping notification.
  - Email Service sends shipping confirmation.

This approach keeps the event-generating logic separate from the services that respond to the events.

## Run the project

```bash
node app.js