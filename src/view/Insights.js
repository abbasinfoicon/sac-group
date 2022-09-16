import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/lib/Banner'
import { useGetAllSersQuery } from '../services/ServiceApi'

const Insights = () => {
  const { data, isError, isLoading } = useGetAllSersQuery()
  console.log("InsightData - ", data);

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>An error occured {data.error.error}</div>

  return (
    <>
      <Banner title="Insights" banner="banner1.jpg" desc="Vorausschauen und Vorausdenken: Den gesellschaftlichen Diskurs bereichern – SAC Whitepapers" />

      <section className="insights">
        <div className="container">
          <div className="row d-flex flex-warp justify-content-center">

            {
              data.products.map((item) => (
                <div className="col-md-4" key={item.id}>
                  <div className="insights_box">
                    <Link to="/insight-detail">
                      <h3>{item.description}</h3>
                      <div className="img-style">
                        <img src="assets/img/insights1.png" alt="" className="img-fluid" />
                      </div>
                    </Link>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default Insights