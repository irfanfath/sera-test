/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getDataLog, getListApiDeveloperLog } from "api/dashboard";
import Pagination from "@etchteam/next-pagination";

interface IResult {
  api: string;
  date: string;
  message: string;
  time: string;
  type: string;
  url: string;
}

interface IDataLog {
  message: string;
  result: IResult[];
  success: boolean;
  total_page: number;
}

const initDataLog = {
  message: "",
  result: [],
  success: false,
  total_page: 0,
};

const initFilter: any = {
  date: "",
  api: "",
  type: "",
  page: 1,
  size: 20,
};

const DashboardDeveloperLog: FC = () => {
  const router = useRouter();
  const query = router.query;

  const [dataLog, setDataLog] = useState<IDataLog>(initDataLog);
  const [listApi, setListApi] = useState([]);
  const [filter, setFilter] = useState(initFilter);
  const [totalPage, setTotalPage] = useState<any>(0);

  const handleRequestApi = async (filter: any) => {
    await getDataLog(filter)
      .then((res) => {
        setDataLog(res.data);
        setTotalPage(res.data.total_page);
      })
      .catch((err) => {
        console.log("getDataLog", err);
      });
  };

  const handleGetListApiDeveloperLog = async () => {
    await getListApiDeveloperLog()
      .then((res) => {
        setListApi(res.data.result);
      })
      .catch((err) => {
        console.log("getListApiDeveloperLog", err);
      });
  };

  const handleFilter = (e: any) => {
    e.preventDefault();
    e.target.value;
    if (e.target.value === "all") {
      setFilter({ ...filter, api: "" });
      router.push({
        pathname: "/dashboard/developer-logs",
        query: { ...filter, api: "" },
      });
    } else {
      setFilter({ ...filter, [e.target.name]: e.target.value, page: 1 });
      router.push({
        pathname: "/dashboard/developer-logs",
        query: { ...filter, [e.target.name]: e.target.value, page: 1 },
      });
    }
  };

  useEffect(() => {
    handleRequestApi(filter);
  }, [filter]);

  useEffect(() => {
    handleGetListApiDeveloperLog();
  }, []);

  useEffect(() => {
    setFilter({
      date: query.date || "",
      api: query.api || "",
      type: query.type || "",
      page: query.page || 1,
      size: query.size || 20,
    });
  }, [query.page]);

  return (
    <Fragment>
      <h2>Developer Log</h2>
      <div className='dashboard__frame' data-cy='dashboard-developer-logs'>
        <div className='dashboard__card'>
          <div
            className='dashboard__table'
            data-cy='dashboard-developer-logs-tabble'
          >
            <table>
              <thead>
                <tr>
                  <th>
                    <input
                      type='date'
                      name='date'
                      className='dashboard__filter'
                      data-cy='dashboard-developer-logs-filter-date'
                      defaultValue=''
                      placeholder='Date'
                      onChange={handleFilter}
                    />
                  </th>
                  <th>Time</th>
                  <th>
                    <select
                      name='type'
                      className='dashboard__filter'
                      data-cy='dashboard-developer-logs-filter-type'
                      onChange={handleFilter}
                    >
                      <option value=''>Type</option>
                      <option value='info'>Info</option>
                      <option value='error'>Error</option>
                    </select>
                  </th>
                  <th>
                    <select
                      name='api'
                      className='dashboard__filter'
                      data-cy='dashboard-developer-logs-filter-api'
                      onChange={handleFilter}
                    >
                      {listApi.map((list: any) => (
                        <option key={list} value={list}>
                          {list}
                        </option>
                      ))}
                    </select>
                  </th>
                  <th>URL</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {dataLog.result &&
                  dataLog.result.map((data: IResult, index: any) => (
                    <tr key={index}>
                      <td>{data.date}</td>
                      <td>{data.time}</td>
                      <td>
                        <span
                          className={`${
                            data.type !== "error"
                              ? "dashboard__tag"
                              : "dashboard__tag dashboard__tag--error"
                          }`}
                        >
                          {data.type}
                        </span>
                      </td>
                      <td>{data.api}</td>
                      <td>{data.url}</td>
                      <td>{data.message}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ul className='dashboard__pagination'>
        <span>
          Showing{" "}
          <strong>
            {dataLog.result.length ? query.size : 0} from{" "}
            {dataLog.result.length
              ? dataLog.result.length * dataLog.total_page
              : 0}{" "}
            data
          </strong>
        </span>
      </ul>
      <Pagination total={filter.size * totalPage} />
    </Fragment>
  );
};

export default DashboardDeveloperLog;
