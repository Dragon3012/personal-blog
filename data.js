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
        title: '🌱 Hành Trình Từ Đứa Trẻ Trong "Vỏ Bọc" Đến Người Bảo Vệ Không Gian Mạng',
        date: '15/11/2025',
        summary: 'Là một người con đất Nghệ An, tôi đã từng vấp ngã khi bước ra khỏi vòng tay cha mẹ để theo đuổi giấc mơ An toàn thông tin...',
        body: `
            <p>Tôi là một người con của mảnh đất miền Trung nắng gió Nghệ An, nơi mà cái nghèo cái khó thường được khỏa lấp bằng tinh thần hiếu học. Suốt những năm tháng thanh xuân, tôi lớn lên trong "vỏ bọc" bình yên và sự che chở tuyệt đối của cha mẹ. Với tôi lúc đó, thế giới chỉ là những trang sách và lời răn dạy dịu dàng.</p>
            
            <h3>1. Cú sốc khi bước ra khỏi "vùng an toàn"</h3>
            <p>Ngày đặt chân vào Sài Gòn theo đuổi ngành An toàn Thông tin tại HUTECH, tôi mới thực sự hiểu thế nào là đơn độc. Giữa những dòng code khô khan, những thuật ngữ bảo mật phức tạp và áp lực tự lập, tôi bắt đầu hoang mang. Đã có lúc tôi gục ngã trước màn hình máy tính, tự hỏi mình là ai giữa thành phố hoa lệ này và liệu lựa chọn này có quá sức với một đứa trẻ vốn chỉ biết đến sự an bài?</p>
            
            <p><strong>Tôi đã từng muốn bỏ cuộc.</strong> Sự chênh lệch giữa kỳ vọng của gia đình và thực tế năng lực khiến tôi rơi vào trạng thái "burnout" trầm trọng. Tôi thấy mình như một kẻ đứng bên lề của ngành công nghệ đang vận động không ngừng.</p>

            <h3>2. Điểm tựa quê hương và sự thức tỉnh</h3>
            <p>Nhưng dòng máu kiên cường của người dân xứ Nghệ không cho phép tôi dừng lại. Trong những đêm dài trăn trở, tôi nhận ra gia đình không phải là "vỏ bọc" ngăn cản tôi trưởng thành, mà là "điểm tựa" để tôi bay cao hơn. Bố mẹ đã ngồi lại, lắng nghe những tâm tư chưa bao giờ tôi dám thổ lộ, tiếp thêm cho tôi bản lĩnh để đối mặt với thất bại.</p>

            

            <h3>3. Đứng dậy bằng trải nghiệm thực tế</h3>
            <p>Thay vì trốn chạy, tôi chọn cách đối đầu. Tôi bắt đầu từ những dự án nhỏ nhất, xin vào làm thực tập sinh để hiểu giá trị của từng dòng code bảo mật. Khi những kiến thức về Firewall, SQL Injection không còn nằm trên trang giấy mà trở thành vũ khí để tôi bảo vệ hệ thống, tôi biết mình đã tìm lại được chính mình.</p>
            
            <p><em>Vấp ngã không phải là dấu chấm hết, đó chỉ là một dấu phẩy để tôi viết tiếp câu chuyện của mình một cách mạnh mẽ hơn. Từ một đứa trẻ được bảo vệ, giờ đây tôi khao khát trở thành một "Cyber Security Specialist" - người bảo vệ cho sự an toàn của cộng đồng trong không gian số.</em></p>
        `
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
        title: '🚀 JavaScript: Ngôn Ngữ Của Mọi Trình Duyệt Và Tại Sao Bạn Phải Học Nó',
        date: '23/12/2025',
        summary: 'Tìm hiểu về ngôn ngữ lập trình phổ biến nhất thế giới và tầm quan trọng của nó trong cả phát triển phần mềm lẫn bảo mật...',
        body: `
            <p>Nếu coi HTML là khung xương, CSS là lớp áo bên ngoài, thì <strong>JavaScript (JS)</strong> chính là linh hồn giúp trang web có thể tương tác và hoạt động một cách thông minh. Xuất hiện từ năm 1995, đến nay JS đã trở thành ngôn ngữ không thể thiếu đối với bất kỳ lập trình viên nào.</p>

            <h3>1. JavaScript thực sự là gì?</h3>
            <p>JavaScript là một ngôn ngữ lập trình kịch bản dựa trên đối tượng, được sử dụng rộng rãi để tạo ra các hiệu ứng tương tác trên website. Điểm đặc biệt là JS chạy trực tiếp trên trình duyệt của người dùng (Client-side), giúp phản hồi ngay lập tức mà không cần chờ đợi máy chủ.</p>
            
            

            <h3>2. Tại sao JavaScript lại là "vũ khí" bắt buộc phải học?</h3>
            <ul>
                <strong>Hệ sinh thái khổng lồ:</strong> Với sự ra đời của Node.js, bạn có thể dùng JS để viết cả Front-end, Back-end và ứng dụng di động (React Native).</li>
                <strong>Khả năng tương tác mạnh mẽ:</strong> JS cho phép tạo ra các bản đồ tương tác, đồ họa 2D/3D, và xử lý dữ liệu thời gian thực mà không cần tải lại trang.</li>
                <strong>Cánh cửa vào thế giới Cybersecurity:</strong> Đối với dân An toàn thông tin, hiểu rõ JS là điều bắt buộc để nhận diện và ngăn chặn các cuộc tấn công như <em>Cross-Site Scripting (XSS)</em> – nơi hacker chèn mã độc JS vào trình duyệt nạn nhân.</li>
            </ul>

            <h3>3. Ví dụ đơn giản về sức mạnh của JS</h3>
            <p>Chỉ với vài dòng code, bạn có thể thay đổi hoàn toàn giao diện hoặc hành vi của trang web:</p>
            <div style="background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 10px; font-family: monospace; margin: 20px 0; border-left: 5px solid #f7df1e;">
                <span style="color: #6a9955;">// Thay đổi màu nền trang web khi nhấn nút</span><br>
                <span style="color: #569cd6;">document</span>.getElementById(<span style="color: #ce9178;">"myBtn"</span>).addEventListener(<span style="color: #ce9178;">"click"</span>, () => {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #569cd6;">document</span>.body.style.backgroundColor = <span style="color: #ce9178;">"#ffcc00"</span>;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;alert(<span style="color: #ce9178;">"JavaScript đã thay đổi diện mạo trang này!"</span>);<br>
                });
            </div>

            

            <h3>Lời kết</h3>
            <p>Học JavaScript không chỉ là học một ngôn ngữ, mà là học cách làm chủ trình duyệt. Dù mục tiêu của bạn là trở thành một Web Developer hay một chuyên gia bảo mật, JavaScript sẽ luôn là người bạn đồng hành không thể thiếu trên con đường sự nghiệp.</p>
        `
    },
    'ddos-defense-strategy': {
        title: '🛡️ DDoS: Cuộc Chiến Đầy Căng Thẳng và Phòng Thủ Toàn Diện',
        date: '20/12/2025',
        summary: 'Phân tích sâu về cơ chế tấn công DDoS và các giải pháp mã nguồn thực tế để bảo vệ hệ thống.',
        body: `
            <p>Trong kỷ nguyên số, DDoS (Distributed Denial of Service) đã trở thành một trong những mối đe dọa hàng đầu đối với sự ổn định của hạ tầng mạng toàn cầu. Đây không chỉ là một kỹ thuật tấn công, mà là một cuộc chiến tiêu hao tài nguyên thực sự.</p>

            <h3>1. Cơ chế tấn công: Sức mạnh của sự phân tán</h3>
            <p>DDoS là hình thức nâng cấp của DoS, nơi kẻ tấn công huy động một mạng lưới khổng lồ các thiết bị bị chiếm quyền điều khiển (Botnet). Lượng lớn yêu cầu đồng loạt đổ về khiến máy chủ mục tiêu quá tải tài nguyên từ băng thông đến CPU.</p>
            
            <p><strong>Mô phỏng kịch bản SYN Flood bằng Python (Scapy):</strong></p>
            <div style="background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 10px; font-family: monospace; margin: 20px 0;">
                <span style="color: #6a9955;"># Gửi gói tin SYN giả mạo IP nguồn để treo kết nối</span><br>
                <span style="color: #569cd6;">from</span> scapy.all <span style="color: #569cd6;">import</span> IP, TCP, send<br>
                <span style="color: #569cd6;">import</span> random<br><br>
                <span style="color: #569cd6;">def</span> <span style="color: #dcdcaa;">syn_flood</span>(target_ip, target_port):<br>
                &nbsp;&nbsp;&nbsp;&nbsp;src_ip = <span style="color: #ce9178;">"."</span>.join(map(str, (random.randint(<span style="color: #b5cea8;">0</span>, <span style="color: #b5cea8;">255</span>) <span style="color: #569cd6;">for</span> _ <span style="color: #569cd6;">in</span> range(<span style="color: #b5cea8;">4</span>))))<br>
                &nbsp;&nbsp;&nbsp;&nbsp;pkt = IP(src=src_ip, dst=target_ip)/TCP(sport=random.randint(<span style="color: #b5cea8;">1024</span>,<span style="color: #b5cea8;">65535</span>), dport=target_port, flags=<span style="color: #ce9178;">"S"</span>)<br>
                &nbsp;&nbsp;&nbsp;&nbsp;send(pkt, verbose=<span style="color: #569cd6;">False</span>)
            </div>

            

            <h3>2. Các hình thức tấn công phổ biến</h3>
            <ul>
                <strong>Tấn công tầng liên kết (Volume-based):</strong> UDP Flood hoặc ICMP Flood làm tràn ngập băng thông.</li>
                <strong>Tấn công giao thức (Protocol Attacks):</strong> SYN Flood làm cạn kiệt bảng trạng thái của tường lửa.</li>
                <strong>Tấn công tầng ứng dụng (Application Layer):</strong> Tập trung vào request HTTP GET/POST để vắt kiệt CPU/RAM.</li>
            </ul>

            <h3>3. Chiến lược phòng thủ đa lớp (Defense in Depth)</h3>
            
            <p><strong>A. Giới hạn lưu lượng (Rate Limiting) với Nginx:</strong></p>
            <div style="background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 10px; font-family: monospace; margin: 20px 0;">
                <span style="color: #6a9955;"># Giới hạn mỗi IP chỉ được gửi 10 requests/giây</span><br>
                limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;<br><br>
                server {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;location / {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limit_req zone=mylimit burst=5 nodelay;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                }
            </div>

            <p><strong>B. Cấu hình Iptables chống SYN Flood:</strong></p>
            <div style="background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 10px; font-family: monospace; margin: 20px 0;">
                <span style="color: #6a9955;"># Chặn IP nếu có hơn 20 kết nối SYN đồng thời</span><br>
                iptables -A INPUT -p tcp --syn -m connlimit --connlimit-above 20 -j DROP<br>
                <span style="color: #6a9955;"># Bật SYN Cookies</span><br>
                sysctl -w net.ipv4.tcp_syncookies=1
            </div>

            

            <h3>4. Giám sát và Ứng phó sự cố</h3>
            <p>Việc giám sát liên tục giúp phát hiện sớm bất thường. Xây dựng kế hoạch ứng phó giúp giảm thiểu tối đa thời gian downtime và thiệt hại kinh tế.</p>
            
            <p><em>Kết luận: An toàn thông tin là một hành trình. Hiểu rõ DDoS là bước đầu tiên để bảo vệ giá trị số của doanh nghiệp.</em></p>
        `
    },
};