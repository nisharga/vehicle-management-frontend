

// type DriverFieldProps = {
//   name: string;
//   label?: string;
// };

// const DriverFieldSelect = ({ name }: FacultyProps) => {
//   const { data, isLoading } = useFacultiesQuery({
//     limit: 100,
//     page: 1,
//   });
//   const faculties = data?.faculties;
//   const facultiesOptions = faculties?.map((faculty: any) => {
//     // console.log(faculty);
//     //ts-ignore
//     return {
//       label: `${faculty?.firstName} ${faculty?.lastName} ${faculty?.middleName}`,
//       value: faculty?.id,
//     };
//   });

//   return (
//     <FormSelectField
//       name={name}
//       label="Faculty"
//       options={facultiesOptions as any}
//     />
//   );
// };

// export default DriverFieldSelect;
