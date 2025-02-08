import React, { useState } from "react";

interface CountryProps {
    countryValue: string;
    onChange: (country: string) => void;
}

const Country: React.FC<CountryProps> = ({ countryValue, onChange }) => {
    const [selectedCountry, setSelectedCountry] = useState<string>(countryValue);

    const countries = [
        { code: "US", name: "미국" },
        { code: "CA", name: "캐나다" },
        { code: "FR", name: "프랑스" },
        { code: "UK", name: "영국" },
        { code: "KR", name: "한국" },
        { code: "CN", name: "중국" },
        { code: "JP", name: "일본" },
        { code: "DE", name: "독일" },
        { code: "IT", name: "이탈리아" },
        { code: "ES", name: "스페인" },
        { code: "BR", name: "브라질" },
        { code: "IN", name: "인도" },
        { code: "MX", name: "멕시코" },
        { code: "RU", name: "러시아" },
        { code: "ZA", name: "남아프리카 공화국" },
        { code: "AU", name: "호주" },
        { code: "NZ", name: "뉴질랜드" },
        { code: "SE", name: "스웨덴" },
        { code: "NO", name: "노르웨이" },
        { code: "FI", name: "핀란드" },
        { code: "DK", name: "덴마크" },
        { code: "IE", name: "아일랜드" },
        { code: "SG", name: "싱가포르" },
        { code: "MY", name: "말레이시아" },
        { code: "TH", name: "태국" },
        { code: "PH", name: "필리핀" },
        { code: "VN", name: "베트남" },
        { code: "AE", name: "아랍에미리트" },
        { code: "SA", name: "사우디아라비아" },
        { code: "IL", name: "이스라엘" },
    ];

    // 국가를 가나다 순으로 정렬
    const sortedCountries = countries.sort((a, b) => a.name.localeCompare(b.name));

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const changeCountry = e.target.value; // 선택된 값 가져오기
        setSelectedCountry(changeCountry);
        onChange(changeCountry); // 부모 컴포넌트에 변경된 값 전달
    };

    return (
        <div>
            <form className="max-w-sm mx-auto">
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    궁금한 나라
                </label>
                <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={selectedCountry} // select의 value를 state와 연결
                    onChange={handleChange} // onChange 이벤트 핸들러 추가
                >
                    <option value="">국가선택</option>
                    {sortedCountries.map((country) => (
                        <option key={country.code} value={country.code}>
                            {country.name}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
};

export default Country;