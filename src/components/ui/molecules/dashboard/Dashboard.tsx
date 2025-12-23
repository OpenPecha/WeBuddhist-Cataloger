import { Separator } from "../../atoms/Seperator"
import { DashBoardTable } from "./dashboard-table/DashboardTable"
import SearchField from "../search/SearchField"
import { PaginationComponent } from "../all-pagination/PaginationComponent"
import { useState } from "react"
import MainLayout from "../../../Layouts/MainLayout"

const dummydata = [
    {
        "bdrc": "WA0XLF855CC152C65",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "དཔལ་ལྡན་ས་གསུམ་མ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "TfoanoHlFnzgYXN8upur4",
        "status": true
    },
    {
        "bdrc": "WA0XLF0FAD365454A",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "སྒྲོལ་མ་ཉེར་གཅིག་ལ་བསྟོད་པ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "saXjClLpCGt5zM5yIkzLe"
    },
    {
        "bdrc": "WA0RT3216",
        "wiki": null,
        "type": "translation_source",
        "contributions": [
            {
                "person_id": "FUeF3VrJOix1at29AL8Gw",
                "person_bdrc_id": "P6161",
                "role": "author",
                "person_name": {
                    "bo": "ཞི་བ་ལྷ།",
                    "sa": "Śāntideva",
                    "lzh": "寂天菩萨"
                }
            },
            {
                "person_id": "8M3R5xSmyUFdMETyGVgkA",
                "person_bdrc_id": "P8182",
                "role": "translator",
                "person_name": {
                    "bo": "སྐ་བ་དཔལ་བརྩེགས།"
                }
            },
            {
                "person_id": "zpdgj0AWZ4HGjay7CU8cw",
                "person_bdrc_id": "P753",
                "role": "translator",
                "person_name": {
                    "bo": "ལོ་ཆེན་རིན་ཆེན་བཟང་པོ།"
                }
            },
            {
                "person_id": "JdmVZuFxmTsb2TmNqUA2A",
                "person_bdrc_id": "P8216",
                "role": "translator",
                "person_name": {
                    "bo": "ལོ་ཙཱ་བ་ཤཱཀྱ་བློ་གྲོས།"
                }
            }
        ],
        "date": "2025-11-23",
        "title": {
            "bo": "བྱང་ཆུབ་སེམས་དཔའི་སྤྱོད་པ་ལ་འཇུག་པ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "kj8dljKGdBUuL4GkkVXbB",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "PqT7jXsnVDBWUJIUtPXw9"
    },
    {
        "bdrc": "WA0XL40085092536D",
        "wiki": null,
        "type": "translation_source",
        "contributions": [
            {
                "person_id": "JFur9mkXWvlbrmujRMOkW",
                "person_bdrc_id": "P00EGS1016624",
                "role": "author",
                "person_name": {
                    "bo": "མདོ་མང་གཏེར་ཆེན་རྡོ་རྗེ་བདེ་ཆེན་གླིང་པ།"
                }
            }
        ],
        "date": "2025-11-23",
        "title": {
            "bo": "ཚིག་བདུན་གསོལ་འདེབས།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "aqeeT2JlVVB5jTXNEUPsO"
    },
    {
        "bdrc": "WA0XLFFB9249BE4A5",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "གསོལ་འདེབས་བར་ཆད་ལམ་སེལ།-"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "imTxVe3VcWGcpt8elNAKp",
        "status": true
    },
    {
        "bdrc": "WA0RK0529",
        "wiki": null,
        "type": "translation_source",
        "contributions": [
            {
                "person_id": "uki0xlRI7xzRnbIM5M87A",
                "person_bdrc_id": "P1256",
                "role": "translator",
                "person_name": {
                    "bo": "སྒྲོ་ལོ་ཙཱ་བ་རིན་ཆེན་སྡེ།"
                }
            }
        ],
        "date": "2025-11-23",
        "title": {
            "bo": "བཅོམ་ལྡན་འདས་མ་ཤེས་རབ་ཀྱི་ཕ་རོལ་ཏུ་ཕྱིན་པའི་སྙིང་པོ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "BdfDD44nDSOqa13HgTvd7"
    },
    {
        "bdrc": "WA0XL9ED6898E9FE8",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "སངས་རྒྱས་ཆོས་ཚོགས་མ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "JUcyaw7JggnlcMQrCzd0U"
    },
    {
        "bdrc": "WA3CN7564",
        "wiki": null,
        "type": "translation_source",
        "contributions": [
            {
                "person_id": "vFD9qpYCoSSasPWTpllMq",
                "person_bdrc_id": "P64",
                "role": "author",
                "person_name": {
                    "bo": "ཙོང་ཁ་པ་བློ་བཟང་གྲགས་པ།",
                    "lzh": "宗喀巴"
                }
            }
        ],
        "date": "2025-11-23",
        "title": {
            "bo": "ལམ་གཙོ་རྣམ་གསུམ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "6OR0TeJozhmLp739wUAJo"
    },
    {
        "bdrc": "WA1KG25225",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "ཚད་མེད་བཞི།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "0r1LYaM9bPJXSSthyhKrr"
    },
    {
        "bdrc": "WA0RT3711",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "འཕགས་པ་བཟང་པོ་སྤྱོད་པའི་སྨོན་ལམ་གྱི་རྒྱལ་པོ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "yj0gP2IriW4PYHSMWzTfH"
    },
    {
        "bdrc": "WA0XLF855CC152C65",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "དཔལ་ལྡན་ས་གསུམ་མ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "TfoanoHlFnzgYXN8upur4",
        "status": true
    },
    {
        "bdrc": "WA0XLF0FAD365454A",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "སྒྲོལ་མ་ཉེར་གཅིག་ལ་བསྟོད་པ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "saXjClLpCGt5zM5yIkzLe",
        "status": true
    }
]
const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = dummydata ? Math.ceil(dummydata.length / 10) : 1; //to be change when integration is done
    const breadcrumbItems = [
        { label: "Home", path: "/" },
        { label: "Dashboard", path: "/" },
    ]
    return (
        <MainLayout
            breadcrumbItems={breadcrumbItems}
            searchFieldComponent={<SearchField />}
        >
            <div className="flex">
                <div className="w-4 h-full">
                    <Separator />
                </div>
                <div className="flex-1 max-h-[calc(100vh-15rem)] border border-edge overflow-y-auto">
                    <DashBoardTable
                        data={dummydata}
                    />
                </div>
                <div className="w-4 h-full">
                    <Separator />
                </div>
            </div>

            <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </MainLayout>
    )
}

export default Dashboard