import { useState, FormEvent } from "react";
import Country from "@/components/findHoliday/Country";
import Year from "@/components/findHoliday/Year";



export default function Home() {
  const [country, setCountry] = useState<string>('');
  const [year, setYear] = useState<string>('');
  interface Holiday {
    date: string;
    localName: string;
    name: string;
  }

  const [holidays, setHolidays] = useState<Holiday[]>([]); // 휴일 데이터를 저장할 state
  
  const handleCountryChange = (newCountry: string) => {
    setCountry(newCountry);
  };

  const handleYearChange = (newYear: string) => {
    setYear(newYear);
  };

  const handleHoliday = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`,
      );

      if (!response.ok) {
        throw new Error(`조회중 오류발생: ${response.status}`);
      }

      const data = await response.json();
      setHolidays(data); // state에 휴일 데이터 저장
      console.log(data);

    } catch (error) {
      console.error(error);
      alert((error as Error).message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="mb-6 text-4xl font-bold text-gray-800 mx-[-6px]">
        공휴일이 궁금해용
      </h1>

      <form onSubmit={handleHoliday} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <Country countryValue={country} onChange={handleCountryChange} />
        </div>
        <div className="mb-4">
          <Year yearValue={year} onChange={handleYearChange} />
        </div>

        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          확인하기
        </button>
      </form>

      <div className="mt-6 w-full max-w-md">
        <h2 className="mt-2 text-lg font-semibold text-gray-800">결과는?</h2>

        {/* 휴일 목록 표시 */}
        <ul className="mt-4 space-y-2">
          {holidays.map((holiday) => (
            <li
              key={holiday.date}
              className="p-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition duration-200"
            >
              {holiday.date} - {holiday.localName} ({holiday.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}