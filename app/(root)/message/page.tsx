import Message from "@/components/Message/Message";

const page = () => {
  return (
    <section className='w-full h-full'>
      <div className='fixed inset-0 bg-gray-900'>
        <div className='fixed inset-0 bg-transparent animate-reveal'>
          <Message />
        </div>
      </div>
    </section>
  );
};

export default page;
