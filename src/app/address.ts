
export class User {
    name: string;
    address: Address;
}

export class Address {
    street?: string;
    town?: string;
    county?: string;
    postcode?: string;
    latitude?: number;
    longitude?: number;
}
