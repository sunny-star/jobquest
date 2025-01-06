// controllers/applicationController.js

import Application from "../models/applicationModel.js";

export const getUserApplications = async (req, res) => {
  try {
    const { userId } = req.params;

    const applications = await Application.find({ userId }).populate("jobId");

    res.status(200).json({
      success: true,
      applications,
    });
  } catch (error) {
    console.error("Error fetching user applications:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
