import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "../../atoms/breadcrumb"
import { Separator } from "../../atoms/Seperator"
import Navbar from "../navbar/Navbar"
import { HomeIcon } from "lucide-react"
import { DashBoardTable } from "./dashboard-table/DashboardTable"

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
        "id": "TfoanoHlFnzgYXN8upur4"
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
        "id": "imTxVe3VcWGcpt8elNAKp"
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
        "bdrc": "WA0XLFAA67A7DBECC",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "རྟེན་འབྲེལ་བསྟོད་པ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "qPFnjGlxQtwf5vumOL2Fe"
    },
    {
        "bdrc": "WA0XLC8C375A294ED",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "བྱང་ཆུབ་སེམས་དཔའི་ལྟུང་བ་བཤགས་པ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "YDTTcib4EKqQ64rb4jgrP"
    },
    {
        "bdrc": null,
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-24",
        "title": {
            "bo": "ཡན་ལག་བདུན་པ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "vrUGbRKQrVgCZIQf0ydG0"
    },
    {
        "bdrc": "WA0XLEECE2B469A32",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "བསམ་པ་ལྷུན་གྲུབ་མ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "stlFqsMY05O0M0GQkJXsr"
    },
    {
        "bdrc": "WA0XLD5D380DB4ECE",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "གསོལ་འདེབས་བསམ་པ་མྱུར་འགྲུབ་མ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "IwAy9MTofF9tRNXU3UrrA"
    },
    {
        "bdrc": "WA0XL940D108F46EF",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "ཡོན་ཏན་གཞིར་གྱུར་མ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "zojtfcMFaFewDNY0C05Bg"
    },
    {
        "bdrc": "WA4CZ32863",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "བྱམས་པའི་སྨོན་ལམ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "44VwpguvAbm2qqAIRle7f"
    },
    {
        "bdrc": "WA0XLDEB6DFF1A465",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "འཕགས་པ་ཐུགས་རྗེ་ཆེན་པོ་ལ་བསྟོད་ཅིང་གསོལ་བ་འདེབས་པ་ཕན་བདེའི་ཆར་འབེབས།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "pdWERcs9pm60WMIakvlrJ"
    },
    {
        "bdrc": "WA0XLBF2CC98D620E",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "སྤྱོད་འཇུག་སྨོན་ལམ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "Vjl52ywBP1qmkUrsmVPZj"
    },
    {
        "bdrc": "WA0XLBD736BA915C7",
        "wiki": null,
        "type": "translation_source",
        "contributions": [],
        "date": "2025-11-23",
        "title": {
            "bo": "ཞབས་བརྟན་རབ་འབྱམས་རྒྱལ་བ།"
        },
        "alt_titles": null,
        "language": "bo",
        "target": null,
        "category_id": "dJpr4gMF72E4UpCnJ84sh",
        "copyright": "Public domain",
        "license": "Public Domain Mark",
        "id": "6QzeABCl74ZDvfss2d7l9"
    }
]
const Dashboard = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <Navbar />
            <div className="border-b py-4 px-6 border-edge">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="flex items-center gap-2" href="/">
                                <HomeIcon className="w-4 h-4" />
                                <span>Home</span>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="h-10">
                <Separator />
            </div>
            <div className="flex">
                <div className="w-4 h-full">
                    <Separator />
                </div>
                <div className="flex-1 max-h-[calc(100vh-15rem)] overflow-y-auto">
                    <DashBoardTable
                        data={dummydata}
                    />
                </div>
                <div className="w-4 h-full">
                    <Separator />
                </div>
            </div>

        </div>
    )
}

export default Dashboard