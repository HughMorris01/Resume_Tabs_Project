const BtnContainer = ({ jobData, currentJob, setCurrentJob }) => {
  return (
    <div className="btn-container">
      {jobData.map((job, index) => {
        return (
          <button
            key={job.id}
            type="button"
            className={index === currentJob ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => {
              setCurrentJob(index);
            }}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
