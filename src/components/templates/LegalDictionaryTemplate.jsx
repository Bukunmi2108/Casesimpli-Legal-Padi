import React, { useEffect, useState } from 'react';
import { SearchInput } from '..'; 
import dictionaryService from '../../modules/dictionaryService';

const LegalDictionaryTemplate = ({ term }) => {
  const [definition, setDefinition] = useState('');
  const [word, setWord] = useState('');
  const [input, setInput] = useState('');
  const [searchMode, setSearchMode] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchTerm = async () => {
      if (term) {
        try {
          const res = await dictionaryService.getDefinition(term);
          setWord(term);
          setDefinition(res);
        } catch (error) {
          console.error('Error fetching definition:', error);
          // Handle error (e.g., display an error message)
        }
      }
    };

    fetchTerm();
  }, [term]); // Only re-run effect when term changes

  const handleInputChange = (value) => {
    setInput(value);
    if (value.length > 2) {
      handleSearch();
    } else {
      setSearchMode(false);
      setSearchResult([]);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await dictionaryService.getTerms(input);
      setSearchMode(true);
      setSearchResult(res);
    } catch (error) {
      console.error('Error fetching search results:', error);
      // Handle error (e.g., display an error message)
    }
  };

  const handleSubmit = async (selectedWord) => {
    try {
      const res = await dictionaryService.getDefinition(selectedWord);
      setInput(selectedWord);
      setSearchMode(false);
      setWord(selectedWord);
      setDefinition(res);
    } catch (error) {
      console.error('Error fetching definition:', error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <main className="main divide-y divide-gray-300">
      <section className="max-w-4xl mx-auto py-8">
        <SearchInput
          autoFocus
          value={input}
          onChange={handleInputChange}
          onKeyUp={handleSearch}
          placeholder="Search the Dictionary"
        />
        {searchMode && (
          <ul className="w-full p-2 flex flex-col divide-y">
            {searchResult.map((result) => (
              <li
                key={result} 
                className="p-2 font-lato font-light text-sm hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSubmit(result)}
              >
                {result}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="max-w-4xl mx-auto py-8 gap-4 flex flex-col">
        <h3 className="h-xl">{word}</h3>
        <div className="text-xl font-light font-lato">{definition}</div>
      </section>
    </main>
  );
};

export default LegalDictionaryTemplate;