import React from 'react';
import Layout from '@/components/shared/Layout';
import Wrapper from '@/components/shared/Wrapper';
import Register from '@/components/Register/Register';
import 'typeface-manrope'; // Import the font

const Index = () => {
  return (
    <div className="dark:bg-primary-dark font-manrope">
      <Wrapper>
        <div>
          <Layout>
            <div className="border dark:border-primary-blue/20 py-2 px-8 rounded-md mt-10">
              <p className="text-[18px] font-[500] dark:text-primary-blue/20">
                Home <span className="dark:text-white text-black"> {'>'} Login </span>
              </p>
            </div>
          </Layout>
          <div>
            <Register />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Index;