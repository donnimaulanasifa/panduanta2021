import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'id-ID',
  title: 'Panduan Tugas Akhir',
  description: 'Panduan untuk tugas akhir',

  themeConfig: {
    repo: 'donnimsifa',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: false,
    lastUpdated: 'Terakhir diperbaharui',

    nav: [
      {
        text: '@donnimsifa',
        link: 'https://donnimsifa.github.io',
      }
    ],

    sidebar: [
      {
        text: 'Beranda',
        link: '/',
      },
      {
        text: '1. Pendaftaran TA',
        link: '/1pendaftaranta',
      },
      {
        text: '2. Seminar Proposal',
        link: '/2semprop',
      },
      {
        text: '3. Seminar Hasil',
        link: '/3semhas',
      },
      {
        text: '4. Sidang dan Komprehensif',
        link: '/4sidangkompre',
      },
      {
        text: '5. Yudisium dan Wisuda',
        link: '/5yudisiumwisuda',
      }
  ]
  }
})