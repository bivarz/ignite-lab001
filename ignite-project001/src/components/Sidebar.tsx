import { gql, useQuery } from '@apollo/client'
import LessonsCard from './LessonsCard'

const GET_LESSONS_QUERY = gql`
  query  {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    slug
    title
    availableAt
  }
}
`
interface GetLessonsQueryResponse {
  lessons:{
    id: string;
    title:string;
    slug: string;
    availableAt: Date
    LessonType: 'live' | 'class'
  }[]
}

const Sidebar: React.FC = () => {
 
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
 
  return(
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson =>{
          return(
            <LessonsCard 
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.LessonType}
            key={lesson.id}
            />
          )
        })}              
      </div>
    </aside>
  );
}

export default Sidebar;