import axios from "axios";

const BASE_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export const getNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        page,
        limit,
        notification_type: type,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};