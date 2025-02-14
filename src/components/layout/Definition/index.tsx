type Props = {};
import disc1 from "../../../assets/images/disc1.png";
import disc2 from "../../../assets/images/disc2.png";
import disc3 from "../../../assets/images/disc3.png";
import disc4 from "../../../assets/images/disc4.png";
import discBg from "../../../assets/images/disc.png";
export default function Definition({}: Props) {
  return (
    <section className="mt-[60px] lg:mt-[132px] md:mt-[78px] px-5 md:px-[100px] lg:px-[120px]">
      <div className="flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row justify-between mb-[60px] gap-x-[100px]">
        <div className="flex-1">
          <h3 className="text-[32px] md:text-[42px] lg:text-[52px] relative font-Anton font-normal lg:pr-10">
            Trắc nghiệm tính cách DISC là gì?
            <img src={discBg} className="absolute lg:h-[171px]  right-[15px] lg:w-[314px] md:right-[35px] lg:right-[50px] top-[25px] lg:top-[40px] w-[160px] h-[88px] md:w-[209px] md:h-[114px]" />
          </h3>
        </div>

        <div className="flex-1">
          <p className="text-base text-justify font-normal mb-6 leading-[26px] font-Be_Vietnam_Pro text-primary_color">
            DISC được viết tắt từ bốn chữ cái đầu đại diện cho 4 kiểu tính cách:
            Thống trị (D), Ảnh hưởng (I), Kiên định (S) và Tuân thủ (C). Bài
            test DISC đã trải qua hơn 100 năm phát triển, và được nghiên cứu bởi
            nhà tâm lý học William Moulton Marston.
          </p>
          <p className="text-base text-justify font-normal leading-[26px]">
            Đây là công cụ đánh giá tính cách nhân sự, giúp xác định tính cách
            thông qua hành vi của họ. Khi đã hiểu rõ bản thân, nhân sự có thể tự
            đề xuất các chiến lược phát triển bản thân hiệu quả. Từ đó, khả năng
            làm việc nhóm, kỹ năng giao tiếp và hiệu suất công việc sẽ được cải
            thiện đáng kể.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 md:gap-10 lg:gap-x-10 place-items-stretch gap-y-12 md:gap-y-[32px] lg:gap-y-0">
        <div className="flex flex-col">
          <img src={disc1} alt="" className="w-full  object-cover" />
          <h4 className="text-lg md:text-[28px] mt-4 md:mt-8 font-[700] leading-[36px] text-primary_color">
            Dominance
          </h4>
          <p className="text-base font-normal">(Sự thống trị)</p>
        </div>
        <div className="flex flex-col">
          <img src={disc2} alt="" className="w-full  object-cover" />
          <h4 className="text-lg md:text-[28px] mt-4 md:mt-8 font-[700] leading-[36px] text-primary_color">
            Influence
          </h4>
          <p className="text-base font-normal">(Sự ảnh hưởng)</p>
        </div>
        <div className="flex flex-col">
          <img src={disc3} alt="" className="w-full  object-cover" />
          <h4 className="text-lg md:text-[28px] mt-4 md:mt-8 font-[700] leading-[36px] text-primary_color">
            Steadines
          </h4>
          <p className="text-base font-normal">(Sự kiên định)</p>
        </div>
        <div className="flex flex-col">
          <img src={disc4} alt="" className="w-full  object-cover" />
          <h4 className="text-lg md:text-[28px] mt-4 md:mt-8 font-[700] leading-[36px] text-primary_color">
            Compliance
          </h4>
          <p className="text-base font-normal">(Sự tuân thủ)</p>
        </div>
      </div>
    </section>
  );
}
