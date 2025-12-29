// File: data.js
// Chứa toàn bộ dữ liệu bài viết Blog để nạp vào blog.html và post.html

const blogPosts = {
    'tai-sao-chon-attt': {
        title: '🛡️ An Toàn Thông Tin: Không Chỉ Là Nghề, Đó Là Một Sứ Mệnh',
        date: '20/12/2025',
        summary: 'Đây không chỉ là một ngành học, mà là một cuộc chiến cân não thực sự trong kỷ nguyên số...',
        body: `<p>Có bao giờ bạn tự hỏi điều gì đứng sau sự vận hành ổn định của hàng tỷ giao dịch ngân hàng mỗi ngày? Với mình, câu trả lời nằm ở hai chữ: An toàn Thông tin (ATTT). Đây không chỉ là một ngành học, mà là một cuộc chiến cân não thực sự trong kỷ nguyên số.</p>
               <h3>1. "Cú hích" từ thực tế tại HUTECH</h3>
               <p>Tại HUTECH, mình nhận ra rằng lý thuyết chỉ là bề nổi. Những buổi workshop cùng chuyên gia đã giúp mình hiểu: ATTT là cuộc chiến không hồi kết giữa phòng thủ và tấn công. Bạn phải nghĩ như hacker thì mới có thể xây dựng những thành trì vững chắc nhất.</p>
               <p><strong>Tư duy của mình:</strong> Một hệ thống mạnh không chỉ nằm ở code giỏi, mà nằm ở một kiến trúc an toàn đa lớp và khả năng phản ứng tức thời trước mối đe dọa.</p>
               <h3>2. Tầm nhìn và sứ mệnh cá nhân</h3>
               <p>Trong thế giới số đang bùng nổ, mình chọn dấn thân vào con đường này không chỉ vì đam mê thử thách trí tuệ, mà còn vì mong muốn trở thành người bảo vệ cho những giá trị quan trọng nhất: quyền riêng tư, tài sản số và sự an toàn của cộng đồng trong không gian mạng đầy rủi ro.</p>`
    },
    'uu-tien-hoc-tieng-anh': {
        title: '🌐 Vì Sao Ưu Tiên Học Tiếng Anh Trong Bối Cảnh Toàn Cầu',
        date: '20/11/2025',
        summary: 'Quyết định chiến lược mang lại lợi thế cạnh tranh vượt trội trong kỷ nguyên số...',
        body: `<p>Việc ưu tiên học tiếng Anh trong bối cảnh toàn cầu hóa hiện nay là một quyết định chiến lược mang lại lợi thế cạnh tranh vượt trội.</p>
               <p>Thứ nhất, tiếng Anh là ngôn ngữ của kinh tế quốc tế. Hơn 1.5 tỷ người sử dụng tiếng Anh trên toàn thế giới, giúp kết nối doanh nghiệp, mở rộng thị trường và tạo cơ hội việc làm đa dạng.</p>
               <p>Thứ hai, đây là chìa khóa tri thức. 80% nội dung học thuật, nghiên cứu khoa học và tài liệu chuyên ngành được xuất bản bằng tiếng Anh. Việc thành thạo ngôn ngữ này giúp tiếp cận nguồn tri thức khổng lồ mà không cần chờ bản dịch.</p>
               <p>Thứ ba, tiếng Anh phá vỡ rào cản văn hóa. Du học, du lịch, giao lưu quốc tế trở nên dễ dàng hơn, giúp mở rộng tầm nhìn và xây dựng mạng lưới quan hệ toàn cầu.</p>`
    },
    'bo-cuoc': {
        title: '🌱 Tôi Đã Từng Muốn Bỏ Cuộc Và Cách Tôi Đứng Dậy',
        date: '15/11/2025',
        summary: 'Hành trình vượt qua hoang mang nhờ điểm tựa gia đình và trải nghiệm thực tế...',
        body: `<p>Là sinh viên an toàn thông tin, tôi từng đứng giữa ngã ba đường của sự hoang mang. Giữa chừng con đường học vấn, tôi bỗng hụt hẫng khi nhận ra mình không biết tương lai sẽ đi về đâu.</p>
               <p>Chính lúc tôi sắp gục ngã, gia đình đã không đứng ngoài cuộc. Bố mẹ đã ngồi lại trò chuyện, không chỉ là lời động viên mà còn giúp tôi tìm kiếm cơ hội thực tế. Anh họ làm trong ngành công nghệ đã giới thiệu tôi vào một dự án an toàn mạng nhỏ, nơi tôi được áp dụng kiến thức thực tế. Cái chạm đầu tiên với công việc thực tế đã thay đổi tất cả.</p>`
    },
    'dieu-hoc-duoc-tu-lap-trinh': {
        title: '💡 Những Điều Tôi Học Được Từ Lập Trình',
        date: '19/11/2025',
        summary: 'Về tư duy logic, sự kiên nhẫn và cách giải quyết vấn đề tỉ mỉ...',
        body: `<p>Lập trình không chỉ dạy mình về code, mà còn về cách tư duy logic 🧠 và giải quyết vấn đề 🛠️.</p>
               <h3>1. Sự kiên nhẫn qua từng dòng code</h3>
               <p>Bài học lớn nhất mình học được là sự kiên nhẫn 🧘. Mỗi bug là một câu đố cần giải quyết. Quá trình tìm lỗi giúp củng cố khả năng phân tích chi tiết và tỉ mỉ.</p>
               <h3>2. Quản lý và Hợp tác</h3>
               <p>Các dự án lớn dạy mình về quản lý thời gian ⏱️ và kỹ năng hợp tác 🤝. Không có dự án phần mềm nào thành công mà không có sự giao tiếp rõ ràng và làm việc nhóm hiệu quả.</p>`
    },
    'bai-hoc-quan-ly-quan-net': {
        title: '🛠️ Bài Học "Xương Máu" Từ Dự Án Quán Net',
        date: '20/12/2025',
        summary: 'Xây dựng hệ thống thực tế và những bài học về bảo mật dữ liệu khách hàng...',
        body: `<p>Dự án này là "chiến trường" thực tế đầu tiên giúp mình hiểu thế nào là xây dựng một hệ thống thực thụ.</p>
               <div style="background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 10px; font-family: monospace; margin: 20px 0; border: 1px solid #333;">// Bảo mật mật khẩu khách hàng bằng BCrypt<br>string hashedPassword = BCrypt.HashPassword(rawPassword);<br>// Luôn băm mật khẩu trước khi lưu vào DB!</div>
               <p>Hơn cả việc bảo vệ dữ liệu, mình nhận ra rằng bảo mật là yếu tố sống còn của hệ thống quản lý. Từ việc kiểm soát quyền truy cập admin đến mã hóa dữ liệu giao dịch.</p>`
    },
    'review-chung-chi-cisco': {
        title: '🎓 Review Lấy Chứng Chỉ Cisco Networking Basics',
        date: '21/12/2025',
        summary: 'Kinh nghiệm ôn luyện và tầm quan trọng của chứng chỉ mạng cơ bản...',
        body: `<p>Chứng chỉ Cisco Networking Academy là bước đệm quan trọng cho bất kỳ ai theo ngành Mạng hoặc Bảo mật.</p>
               <h3>1. Tại sao cần chứng chỉ này?</h3>
               <p>Nó cung cấp nền tảng vững chắc về các giao thức mạng cơ bản như TCP/IP, DNS, DHCP. Bạn sẽ hiểu sâu sắc mô hình OSI - "xương sống" của mọi hệ thống mạng.</p>
               <h3>2. Kinh nghiệm học tập</h3>
               <p>Tập trung học sâu vào mô hình OSI và kỹ năng IP Subnetting. Hãy thực hành nhiều trên Packet Tracer để nắm vững lý thuyết thay vì chỉ học thuộc lòng.</p>`
    },
    'cong-cu-bao-mat': {
        title: '🔍 Top 5 Công Cụ Bảo Mật Cho Người Mới Bắt Đầu',
        date: '22/12/2025',
        summary: 'Làm quen với Nmap, Wireshark, Burp Suite và các vũ khí ATTT chuyên dụng...',
        body: `<p>Làm quen với các công cụ chuyên ngành là bước đi đầu tiên để trở thành một chuyên gia ATTT giỏi.</p>
               <ul>
                 <li><strong>Nmap:</strong> Công cụ quét cổng và dịch vụ mạng.</li>
                 <li><strong>Wireshark:</strong> Phân tích gói tin và giao thức dữ liệu.</li>
                 <li><strong>Burp Suite:</strong> Kiểm thử bảo mật ứng dụng Web.</li>
                 <li><strong>Metasploit:</strong> Framework hỗ trợ khai thác lỗ hổng.</li>
                 <li><strong>John the Ripper:</strong> Kiểm tra độ mạnh của mật khẩu.</li>
               </ul>`
    },
    'lam-blog-ca-nhan': {
        title: '💻 Tại Sao Mình Tự Code Blog Cá Nhân?',
        date: '23/12/2025',
        summary: 'Rèn luyện tư duy Front-end và xây dựng Portfolio chuyên nghiệp qua GitHub...',
        body: `<p>Tự xây dựng Blog giúp mình rèn luyện tư duy Front-end và cách quản lý mã nguồn qua Git.</p>
               <h3>1. Làm chủ quy trình</h3>
               <p>Việc triển khai lên GitHub Pages dạy mình cách vận hành một trang web thực tế. Thay vì dùng các nền tảng có sẵn, việc tự code giúp mình hiểu sâu về HTML/CSS.</p>
               <h3>2. Xây dựng Portfolio chuyên nghiệp</h3>
               <p>Đây là một Portfolio sống động nhất để chứng minh năng lực tự học và sự tỉ mỉ của mình với nhà tuyển dụng.</p>`
    },
    'ddos-defense-strategy': {
        title: '🛡️ DDoS: Cuộc Chiến Cân Não Và Chiến Lược Phòng Thủ Toàn Diện',
        date: '20/12/2025',
        summary: 'Phân tích sâu về cơ chế tấn công từ chối dịch vụ phân tán và các giải pháp bảo mật đa lớp cho hệ thống hiện đại...',
        body: `
            <p>Trong kỷ nguyên số, DDoS (Distributed Denial of Service) đã trở thành một trong những mối đe dọa hàng đầu đối với sự ổn định của hạ tầng mạng toàn cầu. Đây không chỉ là một kỹ thuật tấn công, mà là một cuộc chiến tiêu hao tài nguyên thực sự.</p>

            <h3>1. Cơ chế tấn công: Sức mạnh của sự phân tán</h3>
            <p>DDoS là hình thức nâng cấp của DoS, nơi kẻ tấn công không sử dụng một nguồn duy nhất mà huy động một mạng lưới khổng lồ các thiết bị bị chiếm quyền điều khiển (Botnet). Lượng lớn yêu cầu đồng loạt đổ về khiến máy chủ mục tiêu rơi vào tình trạng quá tải tài nguyên trầm trọng từ băng thông, CPU đến bộ nhớ RAM.</p>
            <p>Mục tiêu cuối cùng là làm tê liệt dịch vụ, khiến người dùng hợp lệ không thể truy cập, gây thiệt hại khổng lồ về kinh tế và uy tín cho doanh nghiệp.</p>

            <h3>2. Các hình thức tấn công phổ biến</h3>
            <ul>
                <li><strong>tấn công tầng liên kết (Volume-based):</strong> Làm tràn ngập băng thông bằng các gói tin rác như UDP Flood hoặc ICMP Flood.</li>
                <li><strong>tấn công giao thức (Protocol Attacks):</strong> Khai thác các kẽ hở trong giao thức mạng như SYN Flood nhằm làm cạn kiệt bảng trạng thái của tường lửa.</li>
                <li><strong>tấn công tầng ứng dụng (Application Layer):</strong> Nguy hiểm và tinh vi nhất, tập trung vào các request HTTP GET/POST để vắt kiệt tài nguyên xử lý của Web Server.</li>
            </ul>

            

            <h3>3. Chiến lược phòng thủ đa lớp (Defense in Depth)</h3>
            <p>Trước các cuộc tấn công ngày càng tinh vi, việc phòng thủ cần được triển khai trên nhiều lớp khác nhau:</p>
            <ul>
                <li><strong>Tường lửa (Firewall) & IDS/IPS:</strong> Thiết lập hàng rào ngăn chặn các mẫu truy cập bất thường và lọc lưu lượng độc hại ngay từ cửa ngõ.</li>
                <li><strong>Rate Limiting:</strong> Cơ chế giới hạn số lượng yêu cầu từ một nguồn trong một khoảng thời gian nhất định để ngăn chặn spam request.</li>
                <li><strong>Cân bằng tải (Load Balancing):</strong> Phân phối lưu lượng truy cập qua nhiều máy chủ khác nhau, giúp giảm áp lực cho một điểm duy nhất và duy trì tính sẵn sàng.</li>
                <li><strong>Cloud-based Anti-DDoS:</strong> Sử dụng các dịch vụ đám mây chuyên dụng (như Cloudflare, Akamai) để "hấp thụ" và làm sạch lưu lượng truy cập khổng lồ trước khi nó chạm tới máy chủ của bạn.</li>
            </ul>

            <h3>4. Giám sát và Ứng phó sự cố</h3>
            <p>Phòng bệnh hơn chữa bệnh. Việc giám sát hệ thống liên tục giúp phát hiện sớm các dấu hiệu bất thường về lưu lượng. Đồng thời, xây dựng một kịch bản ứng phó sự cố (Incident Response Plan) rõ ràng sẽ giúp đội ngũ kỹ thuật phản ứng nhanh chóng, giảm thiểu tối đa thời gian downtime và thiệt hại kinh tế.</p>
            
            <p><em>Kết luận: An toàn thông tin là một hành trình, không phải là đích đến. Hiểu rõ về DDoS là bước đầu tiên để xây dựng một hệ thống bền bỉ trước mọi cơn sóng dữ của không gian mạng.</em></p>
        `
    },
};