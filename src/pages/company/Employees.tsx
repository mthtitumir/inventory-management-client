import { useGetAllUserQuery } from "../../redux/features/user/userApi";

const Employees = () => {
  const { data, isLoading } = useGetAllUserQuery({role: "manager"});
  console.log(data);
  
  return <div>Employees</div>;
};

export default Employees;
