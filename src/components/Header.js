import { Link, useNavigate } from 'react-router-dom';
import NaviMemo from './NaviMemo';
import DropdownMenu from './DropdownMenu';

export default function Header() {
    const navigate = useNavigate();

    const menuItems = [
        { label: '自分の記録', onClick: () => { } },
        { label: '体重グラフ', onClick: () => { } },
        { label: '目標', onClick: () => { } },
        { label: '選択中のコース', onClick: () => { } },
        { label: 'コラム一覧', onClick: () => navigate('/column') },
        { label: '設定', onClick: () => { } },
    ];
    return (
        <nav className='bg-dark-500'>
            <div className='max-w-[1280px] mx-auto'>
                <div className='flex justify-between items-center h-[64px] px-[160px]'>
                    <Link to="/">
                        <img src="/icons/logo.svg" alt="Logo" className="w-[114px] h-[64px]" />
                    </Link>
                    <div className="text-white flex items-center">
                        <NaviMemo
                            iconSrc="/icons/icon_memo.svg"
                            text="自分の記録"
                            linkTo="/record"
                            selected
                        />
                        <NaviMemo
                            iconSrc="/icons/icon_challenge.svg"
                            text="チャレンジ"
                        />
                        <NaviMemo
                            iconSrc="/icons/icon_info.svg"
                            text="お知らせ"
                            notification={1}
                        />
                        <DropdownMenu label="My Account" items={menuItems} />
                    </div>
                </div>
            </div>
        </nav>
    );
}