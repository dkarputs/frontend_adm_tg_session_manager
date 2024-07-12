import React from 'react';
import Sidebar from './components/Sidebar'
import {Route, Routes} from "react-router-dom";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Proxy from "./pages/Proxy";
import AllAccounts from "./pages/AllAccounts";
import AccountChecker from "./pages/AccountChecker";
import FormatsConverter from "./pages/FormatsConverter";
import ParserChats from "./pages/ParserChats";
import Inviting from "./pages/Inviting";
import Boosting from "./pages/Boosting";
import MassMailing from "./pages/MassMailing";
import AutoReply from "./pages/AutoReply";
import AllUsers from "./pages/AllUsers";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flexGrow: 1 }}>
                <Routes>
                    <Route path="/" element={<ProtectedRoute  element={<Dashboard />}/>} />
                    <Route path="/proxy" element={<ProtectedRoute  element={<Proxy />}/>} />
                    <Route path="/all_accounts" element={<ProtectedRoute  element={<AllAccounts />}/>} />
                    <Route path="/settings" element={<ProtectedRoute  element={<Settings />}/>} />

                    <Route path="/all_users" element={<ProtectedRoute  element={<AllUsers />}/>} />

                    <Route path="/auto_reply" element={<ProtectedRoute  element={<AutoReply />}/>} />
                    <Route path="/account_checker" element={<ProtectedRoute  element={<AccountChecker />}/>} />
                    <Route path="/mass_mailing" element={<ProtectedRoute  element={<MassMailing />}/>} />
                    <Route path="/formats_converter" element={<ProtectedRoute  element={<FormatsConverter />}/>} />
                    <Route path="/parser_chats" element={<ProtectedRoute  element={<ParserChats />}/>} />
                    <Route path="/inviting" element={<ProtectedRoute  element={<Inviting />}/>} />
                    <Route path="/boosting" element={<ProtectedRoute  element={<Boosting />}/>} />

                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
