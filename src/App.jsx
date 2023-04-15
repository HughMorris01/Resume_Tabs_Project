import { useEffect, useState } from 'react';
import Loading from './Loading';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';
const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobData, setJobData] = useState([]);
  const [currentJob, setCurrentJob] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      setJobData(jobs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <Loading />
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobData={jobData}
        currentJob={currentJob}
        setCurrentJob={setCurrentJob}
      />
      <JobInfo jobData={jobData} currentJob={currentJob} />
    </section>
  );
};

export default App;
