import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { CategoryCode } from '../../api/category';

interface Props {
  categoryCode: CategoryCode;
}

const SearchBar = ({ categoryCode }: Props) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword === '') return;
    navigate(`/feed/${categoryCode}/search/${keyword}`);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className="p-[16px] w-[320px] h-[40px] focus:outline-none focus:ring focus:ring-cyan-300"
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchBar;