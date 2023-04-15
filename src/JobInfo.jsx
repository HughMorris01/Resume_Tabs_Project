import Duties from './Duties';

const JobInfo = ({ jobData, currentJob }) => {
  const { company, dates, duties, title } = jobData[currentJob];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties}></Duties>
    </article>
  );
};
export default JobInfo;
