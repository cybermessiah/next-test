import fsPromises from 'fs/promises'
import path from 'path'

interface IPeople {
    id: string
    name: string
    bio: string
    version: number
}

async function loadPeople(): Promise<IPeople[]> {
    const filePath = path.join(process.cwd(), 'lib/data.json')
    const jsonData = await fsPromises.readFile(filePath)
    const dataToDisplay: IPeople[] = JSON.parse(jsonData.toString())
    return dataToDisplay
}

const PeopleList = async () => {
    const persons = await loadPeople()
    return (
        <div className="lg:px-5 lg:py-12">
            <h3 className="text-3xl uppercase font-extrabold text-white max-w-[320px] pl-2 py-4 lg:py-0 m-auto lg:m-0">
                People List
            </h3>

            {persons.map((individual) => (
                <div
                    key={individual.id}
                    className={`flex flex-row justify-between items-end max-w-sm rounded overflow-hidden shadow-lg border border-solid border-white my-4`}
                >
                    <div className="px-6 py-4">
                        <h3>{individual.name}</h3>
                        <p>{individual.bio}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block rounded-full px-3 text-4xl font-semibold mr-2 mb-4">
                            {individual.version}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PeopleList
