import { TreeView } from '../components/TreeView';
import type { TreeViewData } from '../components/TreeView';
import { Header } from '../components/Header';
import { Page, PageContent } from '../components/Page';

const initialData: TreeViewData[] = [
  {
    title: 'Общая информация',
    node: {
      children: [
        { key: 'Документ', value: 'Профиль требований к должности' },
        { key: 'Должность', value: 'Инженер' },
        { key: 'Функциональное направление', value: 'Логистика' },
        { key: 'Специализация', value: 'Обслуживание и ремонт механического, энергетического и электрооборудования' },
      ]
    }
  },
  {
    title: 'Образование',
    node: {
      children: [
        { key: 'Степень', value: 'Высшее/Среднее высшее' },
        { key: 'Специализация', value: 'Инженерно-техническая' }
      ]
    }
  },
  {
    title: 'Корпоративные компетенции',
    node: {
      children: [
        { key: 'Сотрудничество', value: '1' },
        { key: 'Коммуникации и убеждения', value: '2' },
        { key: 'Достижение результата', value: '3' },
        { key: 'Системное мышление', value: '3' },
        { key: 'Культура безопасности', value: '2' },
        { key: 'Сотрудничество', value: '1' }
      ]
    }
  },
  {
    title: 'Дополнительные требования',
    node: {
      children: [
        { key: 'Инструменты',
          children: [
            { key: 'SAP ERP', value: 'Продвинутый уровень' },
            { key: 'SAP HR', value: 'Продвинутый уровень' }
          ]
        },
        {
          key: 'Иностранные изыки',
          children: [
            { key: 'Английский', value: 'Продвинутый уровень' },
          ]
        },
      ]
    }
  },
];

const HomePage = () => {
  return (
    <Page>
      <Header />
      <PageContent>
        <TreeView data={initialData} />
      </PageContent>

    <style jsx global>{`
      html, body {
        margin: 0;
        padding: 0;
      }

      
    `}</style>
    </Page>
  )
};

export default HomePage;
