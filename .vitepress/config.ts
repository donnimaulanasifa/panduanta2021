import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'id-ID',
  title: 'Panduan Tugas Akhir',
  description: 'Panduan untuk tugas akhir',

  themeConfig: {
    repo: 'vuejs/vitepress',
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
        text: 'Pendaftaran TA',
        link: '/1pendaftaranta',
      },
      {
        text: 'Seminar Proposal',
        link: '/2semprop',
      },
      {
        text: 'Seminar Hasil',
        link: '/3semhas',
      },
      {
        text: 'Sidang dan Komprehensif',
        link: '/4sidangkompre',
      },
      {
        text: 'Yudisium dan Wisuda',
        link: '/5yudisiumwisuda',
      }
  ]
  }
})