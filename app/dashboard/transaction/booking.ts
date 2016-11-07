export class Booking {
  constructor(
    
    public Hallname: string,
    public Hallid: number,
    public BookingDate: Date,
    public Bookingflag:boolean,

     public customer_name: string,
     public customer_address: string,
     public customer_contact: number,
     public booking_rate: number
    
  ) {  }
}
