import fsPromises from 'fs/promises';
import path from 'path'

interface IPeople {
	id: string;
	name: string;
	bio: string;
	version: number;
}

async function loadPeople(): Promise<IPeople[]> {
    const filePath = path.join(process.cwd(), 'lib/data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const dataToDisplay:IPeople[] = JSON.parse(jsonData.toString());
  return dataToDisplay;
}

const PeopleList = async () => {
  const persons = await loadPeople();
  return (
    <div className="post-list">
      {persons.map((individual) => (
        <div key={individual.id} className="individual-listing">
          <h3 className="individual-title">{individual.name}</h3>
          <p className="individual-body">{individual.bio}</p>
          <span className="individual-body">{individual.version}</span>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;