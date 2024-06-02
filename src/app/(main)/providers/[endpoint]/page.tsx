interface EndpointsParams {
  params: {
    endpoint: string;
  };
}
const Endpoints = ({ params: { endpoint } }: EndpointsParams) => {
  return <div>{endpoint}</div>;
};

export default Endpoints;
