import React from 'react';
import { Section } from '../ui/Section';

export const Story: React.FC = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-primary mb-6">Câu Chuyện Của Chúng Tôi</h2>
          <p className="mb-4 text-gray-700">
            Eldernest được thành lập vào năm 2020 bởi một nhóm các chuyên gia y tế và chăm sóc người cao tuổi với tầm nhìn tạo ra một trung tâm chăm sóc toàn diện kết hợp giữa y học hiện đại và phương pháp truyền thống.
          </p>
          <p className="mb-4 text-gray-700">
            Tên "Eldernest" được ghép từ "Elder" (người cao tuổi) và "Nest" (tổ ấm), thể hiện mong muốn của chúng tôi trong việc tạo ra một môi trường ấm áp, an toàn và thoải mái cho người cao tuổi.
          </p>
          <p className="text-gray-700">
            Từ một trung tâm nhỏ, Eldernest đã phát triển thành một cơ sở chăm sóc toàn diện cung cấp nhiều chương trình và dịch vụ đa dạng. Đến nay, Eldernest tự hào đã giúp hàng nghìn người cao tuổi cải thiện sức khỏe và nâng cao chất lượng cuộc sống thông qua phương pháp tiếp cận toàn diện của chúng tôi.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.pexels.com/photos/7991671/pexels-photo-7991671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Trung tâm Eldernest" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
};