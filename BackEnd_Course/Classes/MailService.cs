using MailKit.Net.Smtp;
using MimeKit;

public class MailService
{
    private readonly string _smtpServer;
    private readonly int _smtpPort;
    private readonly string _smtpUser;
    private readonly string _smtpPass;

    public MailService(IConfiguration config)
    {
        _smtpServer = config["MailSettings:SmtpServer"];
        _smtpPort = int.Parse(config["MailSettings:SmtpPort"]);
        _smtpUser = config["MailSettings:SmtpUser"];
        _smtpPass = config["MailSettings:SmtpPass"];
    }

    public void SendEmail(string toEmail, string subject, string body)
    {
        var message = new MimeMessage();


        message.From.Add(new MailboxAddress("Support", _smtpUser));

        message.To.Add(new MailboxAddress("", toEmail));

        message.Subject = subject;
        message.Body = new TextPart("plain")
        {
            Text = body
        };

        using (var client = new SmtpClient())
        {
            client.Connect(_smtpServer, _smtpPort, false);
            client.Authenticate(_smtpUser, _smtpPass);
            client.Send(message);
            client.Disconnect(true);
        }
    }
}
