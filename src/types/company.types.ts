export type TCompany = {
  name: string;
  logo: string;
  isVerified: boolean;
  companyLicenseNumber: string;
  address: {
    country: string;
    provinceOrState: string;
    detailedAddress: string;
    ZIP: string;
    _id: string;
  };
  phoneNo: string;
  email: string;
  _id: string;
  __v: number;
};
