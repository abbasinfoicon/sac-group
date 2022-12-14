import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../view/About'
import Careers from '../view/Careers'
import Clients from '../view/Clients'
import Contact from '../view/Contact'
import Home from '../view/Home'
import InsightDetail from '../view/InsightDetail'
import Insights from '../view/Insights'
import LegalNotice from '../view/LegalNotice'
import NotFound from '../view/NotFound'
import Press from '../view/Press'
import Login from '../view/Login'
import Services from '../view/Services'
import Register from '../view/Register'

const index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insight-detail" element={<InsightDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="/press" element={<Press />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default index