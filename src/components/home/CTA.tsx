import React from 'react';
import { Section } from '../ui/Section';
import { ArrowRight } from 'lucide-react';
import { Link } from '../ui/Link';

export const CTA: React.FC = () => {
  return (
    <Section background="light">
      <div className="rounded-xl bg-primary text-white p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Sẵn sàng bắt đầu hành trình chăm sóc sức khỏe?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Hãy thực hiện bước đầu tiên hướng tới một cuộc sống khỏe mạnh và cân bằng hơn. Đặt lịch tư vấn với các chuyên gia chăm sóc sức khỏe của chúng tôi ngay hôm nay.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Đặt lịch tư vấn
          </Link>
          <Link href="/programs" className="btn bg-primary-dark text-white border border-white hover:bg-primary">
            Khám phá chương trình <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </Section>
  );
};