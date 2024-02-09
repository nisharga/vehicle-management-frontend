"use client";

const PrivacyPolicy = () => {
  const privacyData: { title: string; description: string }[] = [
    {
      title: "Privacy Policy",
      description: `Your privacy is important to us. Any information submitted by the
  buyer for completing the transaction, delivering the product,
  informing about new product releases, and addressing any customer
  service issues are strictly confidential. We don’t share this
  information with anyone`,
    },
    {
      title: "Payment",
      description: `To Purchase any of our products, you have the option of paying via PayPal or any major credit and debit cards. Extensions and Themes are licensed for one year at a time. After that you may renew your license to continue updates and support. We do not store your payment or credit card information for your security.`,
    },
    {
      title: "License Usage",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Terms & Conditions</h1>
      <div className="w-full h-72 bg-purple-200/50 rounded flex justify-center items-center">
        <h1 className="text-2xl md:text-5xl font-bold text-center px-4">
          Terms & Conditions
        </h1>
      </div>
      <div className="w-full md:w-3/5 mx-auto h-full bg-white mt-10  md:-mt-20 rounded">
        <div className="py-10 px-8">
          {privacyData.map((item, index) => (
            <div key={index}>
              <h1 className="text-xl md:text-2xl font-semibold">
                {item?.title}
              </h1>
              <p className="leading-6 my-8 font-medium">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
