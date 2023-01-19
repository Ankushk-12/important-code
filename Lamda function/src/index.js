const badRequestError = (message) => {
  return {
    statusCode: 400,
    body: message ? JSON.stringify(message) : "BAD_REQUEST_ERROR",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
};

const successResponse = (body) => {
  return {
    statusCode: 200,
    body: typeof body === "string" ? body : JSON.stringify(body),
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
};
module.exports.test = async (event, context) => {
  try {
    console.log("Hey");
    return successResponse("Sucessful api")
  } catch (err) {
    console.log(err);
    return badRequestError("Un-Sucessful api")
  }
};
