export class BookingDetails {
    name: string;
    phone_number: string;
    email: string;
    service: string;
    serviceDetails: string;
    bookingDate: string;
    bookingTime: string;
    barberDetails: string;

    constructor(value : BookingDetails = {} as BookingDetails ){
        this.name = value.name;
        this.phone_number = value.phone_number;
        this.email = value.email;
        this.service = value.service;
        this.serviceDetails = value.serviceDetails;
        this.bookingDate = value.bookingDate;
        this.bookingTime = value.bookingTime;
        this.barberDetails = value.barberDetails;
    }
}