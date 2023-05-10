import { NotificationStatusEnum } from "./notification-status-enum.model";

export class NotificationStatus {
    title: string;
    status: NotificationStatusEnum;
    message: string;

    constructor(title: string, status: NotificationStatusEnum, message: string) {
        this.title = title;
        this.status = status;
        this.message = message;
    }
}