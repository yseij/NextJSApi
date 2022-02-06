import { buildFeedbackPath, extractFeeback } from "./feedback";

function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeeback(filePath);
  const selectedFedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFedback });
}

export default handler;
