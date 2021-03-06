import React, {useState, useEffect} from 'react';
import { Table } from 'antd';
import axios from 'axios';
import moment from 'moment';

const columns = [
  {
    title: '#',
    dataIndex: '_id',
    key: '_id',
  },
  {
    title: 'Created at',
    dataIndex: 'created',
    key: 'created',
    render: row => moment(new Date(row * 1000)).format('DD.MM.YYYY')
  },
  {
    title: 'Attack pattern',
    dataIndex: 'attack_pattern',
    key: 'attack_pattern',
    render: row => row.join(',\n')
  },
  {
    title: 'Threat actor',
    dataIndex: 'threat_actor',
    key: 'threat_actor',
    render: row => row.join(',\n')
  },
  {
    title: 'Software',
    dataIndex: 'software',
    key: 'software',
    render: row => row.join(',\n')
  },
  {
    title: 'Malware',
    dataIndex: 'malware',
    key: 'malware',
    render: row => row.join(',\n')
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    render: row => row.join(',\n')
  },
  {
    title: 'Organisation',
    dataIndex: 'org',
    key: 'org',
    render: row => row.join(',\n')
  },
];

const testData = [
  {
    "industry": [],
    "technique": [],
    "ioc": [
      "0d90fe36866ee30eb5e4fd98583bc2fdb5b7da37e42692f390ac5f807a13f057",
      "036c2088cb48215f21d4f7d751d750b859d57018c04f6cadd45c0c4fee23a9f8",
      "19d03a25af5b71e859561ff8ccc0a073acb9c61b987bdb28395339f72baf46b4",
      "62cf22f840fffd8d8781e52b492b03b4efc835571b48823b07535d52b182e861",
      "8310d39aa1cdd13ca82c769d61049310f8ddaea7cd2c3b940a8a3c248e5e7b06",
      "84e0b1d94a43c87de55c000e3acae17f4493a57badda3b27146ad8ed0f90c93e",
      "85267e52016b6124e4e42f8b52e68475174c8a2bdf0bc0b501e058e2d388a819",
      "6a94f565d482906be7da4d801153eb4dab46d92f43be3e1d59ddd2c7f328109",
      "775e3cf1a64effa55570715b73413c3ea3a6b47764a998b1272b5be059c25b",
      "00b761bce25594da4c760574d224589daf01086c5637042982767a13a2f61bea",
      "250b09f87fe506fbc6cedf9dbfcb594f7795ed0e02f982b5837334f09e8a184b",
      "4b3ae36b04d6aba70089cb2099e6bc1ba16d16ea24bbf09992f23260151b9faf",
      "946405e2f26e1cc0bd22bc7e12d403da939f02e9c4d8ddd012f049cf4bf1fda9",
      "9cd5fa89d579a664c28da16064057096a5703773cef0a079f228f21a4b7fd5d2",
      "089ccd376c9a4d5e5bdd553181ab4821d2c26fefc299cce7a4f023a660484d5",
      "888b5e657b41d45ef0b2ed939e27ff9ea3a11c46946e31372cf26d92361c012",
      "577d2b97963b717981c01b535f257e03688ff4a918aa66352aa9cd31845b67d",
      "17161e0ab3907f637c2202a384de67fca49171c",
      "79b1b24db7c78a4680637e3d5",
      "29367502e16bf1e2b788705014d0142d8bcb7fcc6a47d56fb82d7e333454e923",
      "315e297ac510f3f2a60176f9c12fcf92681bbad758135767ba805cdea830b9ee",
      "3e6166a6961bc7c23d316ea9bca87d8287a4044865c3e73064054e805ef5ca1a",
      "3f40d4a0d0fe1eea58fa1c71308431b5c2ce6e381cacc7291e501f4eed57bfd2",
      "533d6ca0c2be8860a0f7fbfc7820ffd595edc63e540ff4c5991808da6a257d",
      "78a3d21325d3db7470fbf1a6d254e23d349531fca4d7f458b33ca93c91e61cd",
      "9c0180eba2a712f1aba1303b90cbf12c1117451ce13b68715931abc437b10cd"
    ],
    "country": [
      "Ukrainian",
      "European",
      "Ukrainian",
      "Ukrainian",
      "Ukrainian",
      "Russian",
      "T1105",
      "Russian",
      "Trojan",
      "Trojan",
      "Trojan",
      "Trojan",
      "Trojan",
      "Trojan",
      "Trojan",
      "Downloader.",
      "Trojan",
      "Hong Kong",
      "Australia",
      "New Zealand",
      "Brasil",
      "United States",
      "Canada",
      "France",
      "Italia",
      "Россия",
      "España",
      "United Kingdom"
    ],
    "org": [
      "Gamaredon APT Group",
      "APT",
      "LookingGlass",
      "CERT- UA",
      "https://blog.trendmicro.com/trendlabs-security-intelligence/about-us/ https://twitter.com/trendmicrorsrch http://www.facebook.com/trendmicro",
      "Gamaredon APT Group",
      "VBScript",
      "VBS",
      "VBS",
      "VBS",
      "Gamaredon APT Group",
      "VBS",
      "VBS",
      "RUN",
      "VBS",
      "T1071, T1082",
      "XOR",
      "ASCII",
      "VBS",
      "SentinelOne",
      "VBS",
      "VBS",
      "EXE",
      "VBS",
      "IP",
      "IP",
      "VBS",
      "IP",
      "Virtual Private Server",
      "VPS",
      "VBS",
      "APT",
      "APT",
      "Gamaredon APT Group",
      "Microsoft Office",
      "Micro™ Smart Protection Suitesand",
      "Microsoft Exchange",
      "IoCs",
      "SHA256",
      "DOT",
      "https://www.trendmicro.com/us/business/saas/cloud-app-security/office-365/index.html",
      "Gamaredon APT Group",
      "SHA256",
      "N/",
      "Finding Multi-Stage Backdoors",
      "Home Users",
      "APT",
      "Microsoft SharePoint",
      "the Cloud Raccoon Stealer",
      "Google Cloud Services",
      "Local News Links Coronavirus Update",
      "Subscribe Home and Home Office",
      "NABU",
      "EMEA",
      "Deutschland / Österreich / Schweiz",
      "siteAdd DisqusAddd D N t S",
      "https://disqus.com/data-sharing-settings/ 4/27/2020",
      "Gamaredon APT Group"
    ],
    "mitre_attack": [
      "AR2SzsXuDFjCsID7AdOyoE_U",
      "AR2SzsXuDFjCsID7AdOyoE_U",
      "T1193",
      "T1204",
      "T1221",
      "T1064",
      "T1064",
      "T1140",
      "T1193",
      "T1204",
      "T1221",
      "T1064",
      "T1064",
      "T1140",
      "AR2SzsXuDFjCsID7AdOyoE_U",
      "T1060",
      "T1043",
      "T1071",
      "T1082",
      "T1105",
      "T1001",
      "T1107",
      "T1043",
      "T1071",
      "T1082",
      "T1105",
      "T1001",
      "T1107",
      "AR2SzsXuDFjCsID7AdOyoE_U",
      "SHA256",
      "W97M_CVE2017019",
      "W97M",
      "CVE2",
      "W97M_CVE2017019",
      "W97M",
      "CVE2",
      "W97M",
      "CVE2",
      "W97M",
      "CVE2",
      "W97M",
      "CVE2",
      "W97M",
      "CVE2",
      "SHA256",
      "XXVBAF01FF00",
      "W97M_VBSDOWNLDR",
      "W97M_VBSDOWNLDR",
      "W97M_VBSDOWNLDR",
      "AR2SzsXuDFjCsID7AdOyoE_U",
      "SHA256",
      "X97M",
      "CVE20171",
      "XXVBAF01FF006",
      "X97M",
      "CVE20171",
      "XXVBAF01FF006",
      "XXPE50FFF034",
      "X97M",
      "CVE201711882",
      "XXPE50FFF034",
      "XXPE50FFF034",
      "AR2SzsXuDFjCsID7AdOyoE_U",
      "AR2SzsXuDFjCsID7AdOyoE_U"
    ],
    "malware": [
      "%USERPROFILE%\\Documents\\MediaPlayer\\PlayList.vbs.”",
      "Trojan.W97M.CVE2",
      "Trojan.XML.PHISH.",
      "Trojan.W97M.CVE2",
      "Trojan.W97M.CVE2",
      "Trojan.W97M.CVE2",
      "Trojan.W97M.CVE2",
      "Trojan.W97M.CVE2",
      "Downloader.VBA.TRX.XXVBAF01FF00",
      "Trojan.X97M.CVE20171",
      "Downloader.VBA.TRX",
      "TrojanSpy.Win32.FAREIT.UHBAZCLIZ",
      "Trojan.X97M.CVE20171",
      "Downloader.VBA.TRX.XXVBAF01FF006",
      "Backdoor.Win32.REMCOS.USMANEAGFG",
      "Troj.Win32.TRX.XXPE50FFF034",
      "Trojan.MSIL.AGENTTESLA.THCOCBO",
      "Trojan.X97M.CVE201711882.THCOCBO",
      "Backdoor.Win32.REMCOS.USMANEAGFE",
      "Troj.Win32.TRX.XXPE50FFF034",
      "TrojanSpy.Win32.FAREIT.UHBAZCLIZ",
      "Troj.Win32.TRX.XXPE50FFF034"
    ],
    "city": [],
    "threat_actor": [
      "Gamaredon"
    ],
    "identity": [],
    "campaign": [],
    "software": [
      "Blog",
      "Blog",
      "Malware",
      "Erina",
      "Maruyama",
      "Microsoft",
      "Blog",
      "C&C",
      "C&C",
      "Exif",
      "Blog",
      "Blog",
      "Microsoft",
      "Microsoft",
      "Microsoft",
      "Google",
      "Blog",
      "N/A",
      "N/A",
      "N/A",
      "C&C",
      "Multi-Stage",
      "Backdoors",
      "C&C",
      "Blog",
      "Cybersecurity",
      "Linux",
      "Malware",
      "Microsoft",
      "Google",
      "Malware",
      "Spyware",
      "México",
      "Österreich",
      "Blog"
    ],
    "tool": [],
    "theat_actor": [],
    "treat_actor": [],
    "attack_pattern": [],
    "_id": "6015a40028fe0a35c46e03d3",
    "created": "2133214244",
    "__v": 0
  }
];

const DataTable = () => {
  const [tableData, setTableData] = useState([]);
  const [tableLoading, setTableLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://188.68.217.68:3000/data', {timeout: 2})
      .then((r) => {
        setTableData(r.data);
        setTableLoading(false);
      })
      .catch(() => {
        setTableData(testData)
        setTableLoading(false);
      });
  }, [])

  return (
    <Table
      rowKey="_id"
      columns={columns}
      dataSource={tableData}
      title={() => 'Список угроз'}
      loading={tableLoading}
      scroll={{ x: 1500, y: 300 }}
      bordered
    />
  )
}

export default DataTable
  