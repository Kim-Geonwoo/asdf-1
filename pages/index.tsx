import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { count } from "console";

import { useState, FormEvent } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function Home() {
  const [country, setCountry] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [holidays, setHolidays] = useState([]); // 휴일 데이터를 저장할 state
  
  const handleHoliday = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`,
        {
          // 필요한 경우 옵션 추가 (예: headers)
        }
      );

      if (!response.ok) {
        throw new Error(`조회중 오류발생: ${response.status}`);
      }

      const data = await response.json();
      setHolidays(data); // state에 휴일 데이터 저장
      console.log(data);

    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        공휴일이 궁금해용
      </h1>
      <p>{year}</p>
      <p>{country}</p>
           


    <form onSubmit={handleHoliday}>
      <div>
        <label>궁금한 나라: </label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}></input>
      </div>
      <div>
        <label>연도: </label>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)}></input>
      </div>

      <button type="submit">확인하기</button>
    </form>

    <div>
      <h2>결과는?</h2>

      {/* 휴일 목록 표시 */}
      <ul>
        {holidays.map((holiday) => (
          <li key={holiday.date}> {/* key prop 추가 */}
            {holiday.date} - {holiday.localName} ({holiday.name})
          </li>
        ))}
      </ul>
    </div>
      
    </div>
  );
}
