import { useState, Fragment } from "react";
import { buildFeedbackPath, extractFeeback } from "../api/feedback";

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeeback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
