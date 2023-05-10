import { NotificationStatus } from "../model/notification-status.model";

export class UserInterfaceState {
    cartIsVisible: boolean;
    notification?: NotificationStatus;

    constructor(cartIsVisible: boolean, notification?: NotificationStatus) {
        this.cartIsVisible = cartIsVisible;
        this.notification = notification;
    }
}