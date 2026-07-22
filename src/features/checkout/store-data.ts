export type StoreLocation = Readonly<{
  id: string;
  name: string;
  address: string;
  district: string;
  city: string;
  phone: string;
  hours: string;
  inStock: boolean;
}>;

export const storeLocations: readonly StoreLocation[] = [
  {
    id: "store-hn-1",
    name: "Nexora Lê Duẩn",
    address: "209 Lê Duẩn, Hai Bà Trưng",
    district: "Hai Bà Trưng",
    city: "Hà Nội",
    phone: "0243 209 2097",
    hours: "8:00 - 21:00",
    inStock: true,
  },
  {
    id: "store-hn-2",
    name: "Nexora Cầu Giấy",
    address: "142 Thái Hà, Đống Đa",
    district: "Đống Đa",
    city: "Hà Nội",
    phone: "0243 555 2097",
    hours: "8:00 - 21:00",
    inStock: true,
  },
  {
    id: "store-hcm-1",
    name: "Nexora Nguyễn Huệ",
    address: "42 Nguyễn Huệ, Quận 1",
    district: "Quận 1",
    city: "TP. Hồ Chí Minh",
    phone: "0283 209 2097",
    hours: "8:00 - 21:30",
    inStock: true,
  },
  {
    id: "store-hcm-2",
    name: "Nexora Phú Nhuận",
    address: "118 Phan Xích Long, Phú Nhuận",
    district: "Phú Nhuận",
    city: "TP. Hồ Chí Minh",
    phone: "0283 555 2097",
    hours: "8:00 - 21:00",
    inStock: false,
  },
  {
    id: "store-dn-1",
    name: "Nexora Đà Nẵng",
    address: "45 Bạch Đằng, Hải Châu",
    district: "Hải Châu",
    city: "Đà Nẵng",
    phone: "0236 209 2097",
    hours: "8:00 - 20:30",
    inStock: true,
  },
];
