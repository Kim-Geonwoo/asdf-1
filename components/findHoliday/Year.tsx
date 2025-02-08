import React, { useState } from "react";

interface YearProps {
    yearValue: string;
    onChange: (country: string) => void;
}

const Year: React.FC<YearProps> = ({ yearValue, onChange }) => {
    const [selectedYear, setSelectedYear] = useState<string>(yearValue);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const changeYear = e.target.value; // 선택된 값 가져오기
        setSelectedYear(changeYear);
        onChange(changeYear); // 부모 컴포넌트에 변경된 값 전달
    };

    return (
        <div>
            <form className="max-w-sm mx-auto">
                <label htmlFor="years" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    궁금한 년도
                </label>
                <select
                    id="years"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={selectedYear} // select의 value를 state와 연결
                    onChange={handleChange} // onChange 이벤트 핸들러 추가
                >
                    <option value="">연도선택</option>
                    {Array.from({ length: 51 }, (_, index) => {
                        const year = 2000 + index; // 2000년부터 2050년까지
                        return (
                            <option key={year} value={year.toString()}>
                                {year}
                            </option>
                        );
                    })}
                </select>
            </form>
        </div>
    );
};

export default Year;