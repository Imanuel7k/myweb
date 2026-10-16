---
title: "否定提升 Neg-Raising"
date: 2026-10-16
description: "从 Gajewski、Romoli 到 Jeretič，介绍否定提升的预设分析、标量含义分析与子论域替代项推导。"
categories: ["语言学"]
tags: ["语义学", "否定提升"]
draft: false
---

## 否定提升现象

在各类语言中，否定提升指的是这种现象：在主句中的否定意味着到子句的否定（虽然逻辑上并非如此）。比如，直觉上来讲，(1)a意味着(1)b。

(1) a. Bill doesn’t think that Mary is here.  
    b. Bill thinks that Mary is not here.

形式语言学尝试对这种现象作出解释和分析。

## Gajewski（2007）

### 句法分析

Gajewski概述了前人的解释道路。一种解释对否定提升（一下简称NR）提出了句法的分析，认为NG是句法上把否定前移。Gajewski质疑句法无法解释存在非NR谓词的现象。比如，即使和(1)具有相同句法的情况下，(2)a并不蕴含(2)b。

(2) a. Bill didn’t say that Mary is here.  
    b. Bill said that Mary isn’t here.

### 预设分析

Gajewski支持语义层面的分析。具体来说，支持Bartsch(1973)的预设（presupposition）理论。这一理论认为NR句存在着一个排中预设。

首先对 `a believes that p` 作出语义解释：在a的所有相容可能世界中，p全为真。即

$$
\forall w(w \in B_a \rightarrow w \in p)
$$

Bartsch认为NR存在着如下预设：

$$
\forall w(w \in B_a \rightarrow w \in p)
\lor
\forall w(w \in B_a \rightarrow w \notin p)
$$

排中预设使a要么认为p要么认为非p（即a对p有确定看法）考虑到预设能够在否定句中保留，所以`a doesn't believe that p`有如下结果


$$
\neg \forall w(w \in B_a \rightarrow w \in p)
$$

有预设

$$
\forall w(w \in B_a \rightarrow w \in p)
\lor
\forall w(w \in B_a \rightarrow w \notin p)
$$

因此，

$$
\begin{gathered}
\neg \forall w(w \in B_a \rightarrow w \in p) \\[6pt]
\underline{
\forall w(w \in B_a \rightarrow w \in p)
\lor
\forall w(w \in B_a \rightarrow w \notin p)
}
\end{gathered}
$$

$$
\therefore\ \forall w(w \in B_a \rightarrow w \notin p)
$$

这正是 a believe that $\neg p$ 。Gajewski认为，是否产生这种预设，是约定地根据谓词决定的。Horn(1989)给出了这个清单：
> A list of Neg-Raising predicates, arranged by semantic field:
> 1. think, believe, suppose, imagine, expect, reckon, feel
> 2. seem, appear, look like, sound like, feel like
> 3. be probable, be likely, figure to
> 4. want, intend, choose, plan
> 5. be supposed to, ought, should, be desirable, advise, suggest

## Romoli（2013）

Romoli（2013）提出了一种基于标量含义（scalar implicature）的否定提升理论，认为否定提升并非句子的字面意义，也不是预设，而是通过语用推理产生的。

### 标量与替代项

在日常交流中，我们说出一个句子时，听者不仅会考虑这个句子本身的意义，还会考虑：说话者为什么选择这种表达，而没有选择其他表达？ 这些本来可以使用的其他表达，就叫作替代项（alternatives）。
例如：
（1）有些学生通过了考试。
（2）所有学生都通过了考试。
在这里，“有些”和“所有”可以相互替换，因此两个句子构成一组替代项$\{有些，所有\}$。但是，它们在逻辑上并不是平等的。
“所有学生都通过了考试”必然意味着“有些学生通过了考试”（假定确实有学生），但“有些学生通过了考试”并不意味着“所有学生都通过了考试”。
因此，我们说（2）比（1）更强。这种替代项之间的强弱关系就构成了一个标量（scale）：
$$
\text{有些}<\text{所有}
$$
这里的强弱并不是语气的强弱，而是逻辑上的信息强弱：越强的表达，对实际情况的限制就越多。

### Romoli的方案

Romoli 的核心思路是：
1. 引入更强的替代表达。 说话者除了可以说“我不认为他会来”，还可以表达一个更强的判断：“我既不认为他会来，也不认为他不会来”，或者说，考虑主体是否已经在两种可能之间作出了判断。
2. 利用语用推理排除替代情况。 听者通过类似标量含义的机制，推断说话者并非处于完全没有确定看法的状态。
3. 得到否定提升。 既然说话者不是没有确定看法，又不认为他会来，那么就可以推断说话者认为他不会来。
更准确地说，Romoli 在形式分析中引入了一个排中替代项（excluded middle alternative）：
$$
\operatorname{think}(p)\lor\operatorname{think}(\neg p)
$$
通过对替代项进行语用强化，最终得到否定提升推论。
这一方案的贡献在于把否定提升纳入一般的标量含义理论，而不必把它看成特殊的预设现象。
主要问题是：与之前的替代项相比，这样一个替代项是十分“丑陋”的。为什么 think 恰好具有这样的排中替代项？这一设定缺乏独立解释，显得有些特设。后来 Jeretič（2022）正是针对这一问题，提出了不依赖标量替代项的含义分析。

## Jeretič（2022）

### 一、两种替代项与替代项投射

Jeretič（2022）在论文 *Neg-raising with belief predicates as a scaleless implicature* 中提出，否定提升（Neg-raising，NR）可以被解释为一种无标量含义（scaleless implicature）。

其核心观点是：我们不必像 Romoli（2013）那样，专门假设 *think* 具有一个排中替代项。只需要假设 *think* 具有子论域替代项（subdomain alternatives），再应用一般性的穷尽化算子 EXH，就能够推导出否定提升。

整个理论的目标是证明：

$$
\boxed{
\operatorname{EXH}[\operatorname{NEG}[x\ \mathrm{think}\ p]]
\equiv
x\ \mathrm{think}\ \neg p
}
$$

也就是说，NR的原因就是有着隐含的`EXH`算子。

#### 1. 标量替代项（Scalar alternatives）

Jeretič 首先区分了两类替代项，其中第一类是标量替代项。

标量替代项是指具有逻辑强弱关系的词汇表达。例如：

$$
\operatorname{ScalarAlt}(\mathrm{some})
=
\{\mathrm{some},\mathrm{most},\mathrm{all}\}
$$

以及：

$$
\operatorname{ScalarAlt}(\mathrm{or})
=
\{\mathrm{or},\mathrm{and}\}
$$

以 *some* 和 *all* 为例：

- *Some students passed.*：有些学生通过了。
- *All students passed.*：所有学生都通过了。

第二句话比第一句话更强，因为在论域非空的情况下，后者蕴含前者，反之不成立。

Jeretič 认为，**标量替代项必须对应语言中实际存在的词汇表达。** Romoli那里类似于析取式的替代项是不合理的。


例如，*think* 在语义上可以表示对信念世界的全称量化：

$$
\llbracket \mathrm{think}\rrbracket
=
\lambda p.\lambda x.
\forall w\in\operatorname{DOX}(x)\,p(w)
$$

其中，$\operatorname{DOX}(x)$ 是与主体 $x$ 的信念相容的可能世界集合。

从数学上说，全称量词当然存在对应的存在量词：

$$
\exists w\in\operatorname{DOX}(x)\,p(w)
$$

但是，英语中没有一个通常意义下的信念动词，恰好以这个存在量化式为其词汇意义。

因此，Jeretič 假设，*think* 不具有这样的较弱标量替代项，是无标量的（scaleless）

#### 2. 子论域替代项（Subdomain alternatives）

作为补偿，我们引入第二种替代项是子论域替代项。

假设量词 $Q$ 的量化论域是 $D$，我们可以将 $D$ 替换成它的任意非空子集：

$$
\varnothing\neq D'\subseteq D
$$

由此产生的表达就是子论域替代项。

例如：

> Alice, Bob or Charlie will come.

设三个命题分别为 $A,B,C$，原句表示：

$$
A\lor B\lor C
$$

我们可以缩小析取的论域，得到：

$$
\begin{aligned}
\operatorname{SubdomainAlt}(A\lor B\lor C)
=\{&
A\lor B\lor C,\\
&A\lor B,\ A\lor C,\ B\lor C,\\
&A,\ B,\ C
\}
\end{aligned}
$$

对于 *think*，我们也可以采用这种机制。

假设某人的信念世界只有三个：

$$
\operatorname{DOX}(x)=\{w_1,w_2,w_3\}
$$

原来的 *think p* 表示：

$$
p(w_1)\land p(w_2)\land p(w_3)
$$

其子论域替代项包括：

$$
\begin{aligned}
&p(w_1)\land p(w_2),\\
&p(w_1)\land p(w_3),\\
&p(w_2)\land p(w_3),\\
&p(w_1),\ p(w_2),\ p(w_3)
\end{aligned}
$$

以及原表达本身。

也就是说，我们把信念世界集合替换成它的各个非空子集。

原文还规定，量词是否产生子论域替代项，是词汇层面指定的；而它是否具有标量替代项，则取决于语言中是否存在相应的词汇。

#### 3. 替代项投射（Alternative projection）

词汇本身具有替代项还不够，因为 EXH 最终处理的是一个句子。

因此，我们需要说明词汇的替代项如何形成句子的替代项。

Jeretič 给出了以下规则：

$$

\operatorname{Alt}([E\ldots Q\ldots])
=
\{[E\ldots Q_i\ldots]\mid Q_i\in\operatorname{Alt}(Q)\}

$$

这里：

- $E$ 表示一个包含量词 $Q$ 的表达。
- $Q_i$ 是 $Q$ 的某个替代项。
- 将 $E$ 中的 $Q$ 换成 $Q_i$，就得到整个表达的一个替代项。

这就是**替代项投射（alternative projection）**。

例如，考虑：

$$
S=\neg\forall w\in\{w_1,w_2\}\,p(w)
$$

它表示：

> 并非所有信念世界都满足 $p$。

现在，内部的全称量词具有以下子论域：

$$
\{w_1,w_2\},\quad \{w_1\},\quad \{w_2\}
$$

把这些子论域分别代入原句，同时保留外面的否定符号，就得到：

$$
\boxed{
\operatorname{Alt}(S)
=
\left\{
\begin{array}{l}
\neg\forall w\in\{w_1,w_2\}\,p(w),\\
\neg\forall w\in\{w_1\}\,p(w),\\
\neg\forall w\in\{w_2\}\,p(w)
\end{array}
\right\}
}
$$

**否定不会阻止替代项投射。** 即使量词处于否定的辖域之内，它产生的子论域替代项仍然能够投射到整个否定句。
这些替代项将成为 EXH 的输入。

### 二、EXH 算子

Jeretič 采用 Bar-Lev 与 Fox（2020）的穷尽化理论。

EXH 是一个用于计算含义的算子。它接受两个主要输入：

- 一个命题 $p$，称为基础命题（prejacent）。
- 一个替代项集合 $C$。

然后根据替代项与基础命题的逻辑关系，对原句进行强化。

不同于某些只排除替代项的穷尽化理论，这里的 EXH 既能够**排除替代项**，又能够**纳入替代项**。

它涉及两个集合：

$$
IE(p,C)
$$

和

$$
II(p,C)
$$

分别代表：

- 可无辜排除的替代项（Innocently Excludable）。
- 可无辜纳入的替代项（Innocently Includable）。

#### 1. EXH 的语义定义

定义：

$$
\begin{aligned}
\llbracket EXH\rrbracket(C)(p)(w)
\equiv{}&
p(w)
&\land\bigwedge_{q\in IE(p,C)}\neg q(w)
&\land\bigwedge_{r\in II(p,C)}r(w)
\end{aligned}
$$

这个公式包含三个部分。

**第一部分：保留基础命题。**

$$
p(w)
$$

无论如何强化，原句必须成立。

**第二部分：否定所有可无辜排除的替代项。**

$$
\bigwedge_{q\in IE(p,C)}\neg q(w)
$$

例如，从“有些学生通过了考试”推导出“并非所有学生都通过了考试”，就是通过排除一个更强的替代项来实现的。

**第三部分：肯定所有可无辜纳入的替代项。**

$$
\bigwedge_{r\in II(p,C)}r(w)
$$

这一部分对 Jeretič 的否定提升理论至关重要。

因为她的推导不是通过排除子论域替代项得到否定提升，而是通过**纳入所有子论域替代项**实现的。

#### 2. 可无辜排除（IE）？

我们不能任意否定替代项。

例如，假设：

$$
S=A\lor B
$$

其替代项包括：

$$
C=\{A\lor B,A,B,A\land B\}
$$

我们希望尽可能多地否定替代项，但不能与原句矛盾。

显然，不可能同时否定 $A$ 和 $B$，因为：

$$
(A\lor B)\land\neg A\land\neg B
\equiv\bot
$$

但我们可以选择排除 $A$ 和 $A\land B$，或者排除 $B$ 和 $A\land B$。

对应的两种极大排除方案为：

$$
C'_1=\{A,A\land B\}
$$

$$
C'_2=\{B,A\land B\}
$$

这两种排除方案都是极大的，即在保持一致性的条件下，不能再增加其他被排除的替代项。

但是，我们没有理由偏袒其中一种。所以只有所有极大排除方案共同排除的替代项，才属于 IE。这个意义上讲，“无辜”指不需要在同样合理的可能方案之间作出任意选择。

在这个例子中：

$$
IE(S,C)=C'_1\cap C'_2=\{A\land B\}
$$

**形式定义**

$$
\begin{aligned}
IE(p,C)=\bigcap\{C'\subseteq C:\;&C'\text{ 是极大的，且}
&\{p\}\cup\{\neg q:q\in C'\}
\text{ 一致}\}
\end{aligned}
$$

#### 可无辜纳入（II）

在确定需要排除哪些替代项之后，可无辜纳入考虑还有哪些替代项可以被肯定，而且不会产生矛盾？

II 定义为：

**所有与基础命题及 IE 排除结果一致的极大纳入方案的交集。**

$$
\begin{aligned}
II(p,C)=\bigcap\{C''\subseteq C:\;&C''\text{ 是极大的，且}
&\{p\}
\cup\{\neg q:q\in IE(p,C)\}
&\quad\cup\{r:r\in C''\}
\text{ 一致}\}
\end{aligned}
$$

### 否定提升的证明

#### 1. 定义 think 的语义

首先，Jeretič 采用信念谓词的标准可能世界语义：

$$
\boxed{
\llbracket\mathrm{think}\rrbracket
=
\lambda p.\lambda x.
\forall w\in\operatorname{DOX}(x)\,p(w)
}
$$

其中：

- $x$ 是信念主体。
- $p$ 是一个命题，即从可能世界到真值的函数。
- $\operatorname{DOX}(x)$ 是与主体 $x$ 的信念相容的可能世界集合。

于是：

$$
x\ \mathrm{think}\ p
\equiv
\forall w\in\operatorname{DOX}(x)\,p(w)
$$

而：

$$
\operatorname{NEG}[x\ \mathrm{think}\ p]
\equiv
\neg\forall w\in\operatorname{DOX}(x)\,p(w)
$$

根据量词否定律：

$$
\neg\forall w\in\operatorname{DOX}(x)\,p(w)
\equiv
\exists w\in\operatorname{DOX}(x)\,\neg p(w)
$$

这就是普通的非否定提升解读。

它仅仅说明：主体的信念世界中，至少有一个世界不满足 $p$。

但否定提升要求：

$$
\forall w\in\operatorname{DOX}(x)\,\neg p(w)
$$

即主体的所有信念世界都不满足 $p$。

因此，我们要证明：

$$
\operatorname{EXH}
\left(
\neg\forall w\in\operatorname{DOX}(x)\,p(w)
\right)
\equiv
\forall w\in\operatorname{DOX}(x)\,\neg p(w)
$$

#### 2. 构造子论域替代项

考虑只有两个信念世界的简单模型：

$$
\operatorname{DOX}(x)=\{w_1,w_2\}
$$

为了简化记号，我们定义：

$$
B_Dp:=\forall w\in D\,p(w)
$$

因此，基础命题为：

$$
S=\neg B_{\{w_1,w_2\}}p
$$

其子论域替代项是：

$$
C=\operatorname{Alt}(S)
=
\{
\neg B_{\{w_1,w_2\}}p,
\neg B_{\{w_1\}}p,
\neg B_{\{w_2\}}p
\}
$$

为了方便理解，令：

$$
a=p(w_1),\qquad b=p(w_2)
$$

那么：

$$
S=\neg(a\land b)
$$

而：

$$
C=\{\neg(a\land b),\neg a,\neg b\}
$$

#### 3. 计算 IE

根据前面给出的定义，我们先计算哪些替代项可以被无辜排除。

考虑：

$$
C=\{\neg(a\land b),\neg a,\neg b\}
$$

首先，原句本身不可能被排除，因为这会导致：

$$
\neg(a\land b)\land\neg\neg(a\land b)
\equiv\bot
$$

剩下两个替代项为：

$$
\neg a,\qquad\neg b
$$

如果排除 $\neg a$，就需要断言 $a$。

这与原句一致：

$$
\neg(a\land b)\land a
\equiv
a\land\neg b
$$

同样，如果排除 $\neg b$，就需要断言 $b$：

$$
\neg(a\land b)\land b
\equiv
\neg a\land b
$$

但不能同时排除这两个替代项，因为：

$$
\neg(a\land b)\land a\land b
\equiv\bot
$$

因此，存在两种极大排除方案：

$$
C'_1=\{\neg a\}
$$

$$
C'_2=\{\neg b\}
$$

两者的交集为空：

$$
C'_1\cap C'_2=\varnothing
$$

所以：

$$
IE(S,C)=\varnothing
$$

直观上，我们知道至少一个信念世界不满足 $p$，但没有理由任意选择哪个世界满足 $p$，从而排除相应的替代项。因此没有任何替代项可以被无辜排除。

#### 4. 计算 II

既然：

$$
IE(S,C)=\varnothing
$$

我们接下来考虑，哪些替代项可以被无辜纳入。

原句为：

$$
\neg(a\land b)
$$

全部替代项为：

$$
\{\neg(a\land b),\neg a,\neg b\}
$$

如果把它们全部纳入，得到：

$$
\neg(a\land b)\land\neg a\land\neg b
$$

这个命题显然是一致的。

例如，当：

$$
a=\mathrm{False},\qquad b=\mathrm{False}
$$

时，整个合取式为真。

而且，全部替代项本身就构成一个极大一致纳入集合，因此不存在其他不同的极大纳入集合。

于是：

$$
II(S,C)=C
$$

即：

$$
II(S,C)=
\{
\neg B_{\{w_1,w_2\}}p,
\neg B_{\{w_1\}}p,
\neg B_{\{w_2\}}p
\}
$$

#### 5. 应用 EXH

回顾 EXH 的定义：

$$
\begin{aligned}
\operatorname{EXH}(S)
={}&S
&\land\bigwedge_{q\in IE(S,C)}\neg q
&\land\bigwedge_{r\in II(S,C)}r
\end{aligned}
$$

代入：

$$
IE(S,C)=\varnothing
$$

以及：

$$
II(S,C)=C
$$

得到：

$$
\begin{aligned}
\operatorname{EXH}(S)
={}&
\neg B_{\{w_1,w_2\}}p
&\land\neg B_{\{w_1\}}p
&\land\neg B_{\{w_2\}}p
\end{aligned}
$$

展开：

$$
\begin{aligned}
\operatorname{EXH}(S)
={}&
\neg[p(w_1)\land p(w_2)]
&\land\neg p(w_1)
&\land\neg p(w_2)
\end{aligned}
$$

由于后两个合取项已经蕴含第一个合取项，故：

$$
\operatorname{EXH}(S)
\equiv
\neg p(w_1)\land\neg p(w_2)
$$

这又等价于：

$$
\forall w\in\{w_1,w_2\}\,\neg p(w)
$$

根据 *think* 的语义：

$$
\forall w\in\operatorname{DOX}(x)\,\neg p(w)
\equiv
x\ \mathrm{think}\ \neg p
$$

最终得到：

$$
\operatorname{EXH}[\operatorname{NEG}[x\ \mathrm{think}\ p]]
\equiv
x\ \mathrm{think}\ \neg p
$$

证毕。

整个过程没有引入任何排中预设，也没有使用 Romoli 所假设的排中标量替代项。

#### 6. 推广到任意信念世界集合

原论文为了方便展示，采用了两个世界的例子，但理论并不限于两个世界。

设：

$$
D=\operatorname{DOX}(x)
$$

并假设：

$$
D\neq\varnothing
$$

原句为：

$$
S=\neg\forall w\in D\,p(w)
$$

其子论域替代项为：

$$
\boxed{
C=
\left\{
\neg\forall w\in D'\,p(w):
\varnothing\neq D'\subseteq D
\right\}
}
$$

依照前面的 IE、II 计算，所有子论域替代项都被纳入。

于是：

$$
\operatorname{EXH}(S)
\equiv
\bigwedge_{\varnothing\neq D'\subseteq D}
\neg\forall w\in D'\,p(w)
$$

现在证明：

$$
\boxed{
\bigwedge_{\varnothing\neq D'\subseteq D}
\neg\forall w\in D'\,p(w)
\iff
\forall w\in D\,\neg p(w)
}
$$

**证明：**

$(\Rightarrow)$ 假设：

$$
\bigwedge_{\varnothing\neq D'\subseteq D}
\neg\forall w\in D'\,p(w)
$$

任取 $w_0\in D$。

考虑单元素子集：

$$
D'=\{w_0\}
$$

它是 $D$ 的一个非空子集，因此有：

$$
\neg\forall w\in\{w_0\}\,p(w)
$$

即：

$$
\neg p(w_0)
$$

由于 $w_0$ 是任意选取的：

$$
\forall w\in D\,\neg p(w)
$$

$(\Leftarrow)$ 假设：

$$
\forall w\in D\,\neg p(w)
$$

那么对于任意非空子集 $D'\subseteq D$，都有：

$$
\forall w\in D'\,\neg p(w)
$$

因此：

$$
\neg\forall w\in D'\,p(w)
$$

对所有非空子集均成立，故：

$$
\bigwedge_{\varnothing\neq D'\subseteq D}
\neg\forall w\in D'\,p(w)
$$

综上：

$$
\boxed{
\bigwedge_{\varnothing\neq D'\subseteq D}
\neg\forall w\in D'\,p(w)
\iff
\forall w\in D\,\neg p(w)
}
$$

证毕。

对于无限论域，仍须保证相应替代项集合以及穷尽化运算得到适当定义。


### 四、量化主体下的否定提升

前面的证明都假设信念主体 $x$ 是一个固定的个体，例如 John。

但是，在自然语言中，信念动词的主语也可能是量化表达，例如 *everyone*、*someone* 或 *no one*。

Jeretič（2022）在第 2.3 节末尾及第 2.4.1 节讨论了这一问题，并提出通过选择函数推广子论域替代项的定义。

#### 1. 问题：主体是变量时，信念世界集合也随之变化

考虑：

> No one thinks it's raining.  
> 没有人认为正在下雨。

这个句子可以产生以下否定提升解读：

> Everyone thinks it's not raining.  
> 每个人都认为没有下雨。

注意，这里发生的不只是单一主体的否定提升，而是整个量化结构的强化。

设 $D_e$ 为个体论域，$r$ 表示正在下雨这一命题。

原句的字面意义为：

$$
\boxed{
S=\neg\exists x\in D_e\,
\forall w\in\operatorname{DOX}(x)\,r(w)
}
$$

即：

> 不存在一个人，其所有信念世界都满足正在下雨。

根据量词否定律，这等价于：

$$
\forall x\in D_e\,
\exists w\in\operatorname{DOX}(x)\,\neg r(w)
$$

也就是说，每个人都至少有一个信念世界不满足正在下雨。

但是，否定提升解读要求：

$$
\forall x\in D_e\,
\forall w\in\operatorname{DOX}(x)\,\neg r(w)
$$

即每个人的所有信念世界都不满足正在下雨。

我们需要证明：

$$
\operatorname{EXH}
\left[
\neg\exists x\in D_e\,
\forall w\in\operatorname{DOX}(x)\,r(w)
\right]
\equiv
\forall x\in D_e\,
\forall w\in\operatorname{DOX}(x)\,\neg r(w)
$$

这里出现一个新问题：

**不同主体具有不同的信念世界集合，因而不能再简单地用一个固定子集替换所有主体的量化论域。**

例如：

$$
\operatorname{DOX}(x_1)=\{w_1,w_2\}
$$

$$
\operatorname{DOX}(x_2)=\{w_3,w_4\}
$$

我们需要一种方法，使替代项能够同时为 $x_1$ 和 $x_2$ 选择各自的信念子论域。

#### 2. 选择函数与一般化的子论域替代项

设个体论域为 $D_e$，每个主体 $x$ 的信念世界集合为 $\operatorname{DOX}(x)$。

定义一个函数 $g$，满足：

$$
\boxed{
g(x)\in
\mathcal P(\operatorname{DOX}(x))
\setminus\{\varnothing\}
}
$$

对所有 $x\in D_e$ 成立。

其中，$\mathcal P(D)$ 表示集合 $D$ 的幂集。

因此，$g$ 为每个主体选择一个非空的信念世界子集。

例如：

$$
\begin{aligned}
g_1(x_1)&=\{w_1\}\\
g_1(x_2)&=\{w_3,w_4\}
\end{aligned}
$$

以及：

$$
\begin{aligned}
g_2(x_1)&=\{w_1\}\\
g_2(x_2)&=\{w_3\}
\end{aligned}
$$

都是合法的选择函数。

这里的 $g$ 是对原论文公式（23）中选择函数机制的简化记法：原文让选择函数从每个主体信念集合的非空幂集里选取一个成员，这里直接把选择结果记为 $g(x)$。

据此，*think* 的替代项可以定义为：

$$
\operatorname{Alt}(\mathrm{think})
=
\left\{
\lambda p.\lambda x.
\forall w\in g(x)\,p(w)
:
\forall x\in D_e,\ 
\varnothing\neq g(x)\subseteq\operatorname{DOX}(x)
\right\}
$$

对于原句：

$$
S=\neg\exists x\in D_e\,
\forall w\in\operatorname{DOX}(x)\,r(w)
$$

应用替代项投射，得到：

$$
\boxed{
\operatorname{Alt}(S)
=
\left\{
\neg\exists x\in D_e\,
\forall w\in g(x)\,r(w)
:
\forall x\in D_e,\
\varnothing\neq g(x)\subseteq\operatorname{DOX}(x)
\right\}
}
$$

#### 3. 构造两主体模型

按照原论文公式（27）—（28），考虑一个只有两个主体的模型：

$$
D_e=\{x_1,x_2\}
$$

并设：

$$
\operatorname{DOX}(x_1)=\{w_1,w_2\}
$$

$$
\operatorname{DOX}(x_2)=\{w_3,w_4\}
$$

令：

$$
r_i:=r(w_i)
$$

于是原句可以简化为：

$$
\boxed{
S=\neg[(r_1\land r_2)\lor(r_3\land r_4)]
}
$$

它表示：

> $x_1$ 并非在所有信念世界中都认为下雨，而且 $x_2$ 也并非在所有信念世界中都认为下雨。

现在考虑选择函数 $g_1$：

$$
g_1(x_1)=\{w_1\}
$$

$$
g_1(x_2)=\{w_3,w_4\}
$$

其对应的替代项为：

$$
\neg[r_1\lor(r_3\land r_4)]
$$

再考虑：

$$
g_2(x_1)=\{w_1\}
$$

$$
g_2(x_2)=\{w_3\}
$$

对应的替代项为：

$$
\neg(r_1\lor r_3)
$$

由于每个主体都有三个非空信念子论域：

$$
\{w_1\},\quad \{w_2\},\quad\{w_1,w_2\}
$$

以及：

$$
\{w_3\},\quad \{w_4\},\quad\{w_3,w_4\}
$$

两个主体合计产生：

$$
3\times3=9
$$

个子论域替代项。

其中尤其重要的是四个**单元素选择函数对应的替代项**：

$$
\begin{aligned}
q_{13}&=\neg(r_1\lor r_3)\\
q_{14}&=\neg(r_1\lor r_4)\\
q_{23}&=\neg(r_2\lor r_3)\\
q_{24}&=\neg(r_2\lor r_4)
\end{aligned}
$$

这四个替代项分别对应为两个主体各选择一个信念世界。

接下来证明 EXH 如何利用它们得到否定提升。

#### 4. 计算 IE 与 II

**引理 3**

对于上述原句 $S$ 及其子论域替代项集合，有：

$$
IE(S,\operatorname{Alt}(S))=\varnothing
$$

以及：

$$
II(S,\operatorname{Alt}(S))=\operatorname{Alt}(S)
$$

**证明：**

首先考虑 IE。

四个单元素替代项是整个替代项集合中最强的替代项。

如果我们尝试同时排除它们，就必须肯定：

$$
\begin{aligned}
&\neg q_{13}\land\neg q_{14}
&\qquad\land\neg q_{23}\land\neg q_{24}
\end{aligned}
$$

即：

$$
\begin{aligned}
&(r_1\lor r_3)\land(r_1\lor r_4)
&\qquad\land(r_2\lor r_3)\land(r_2\lor r_4)
\end{aligned}
$$

利用命题逻辑中的分配律，可得：

$$
(r_1\land r_2)\lor(r_3\land r_4)
$$

但是，这恰好是原句的否定：

$$
S=\neg[(r_1\land r_2)\lor(r_3\land r_4)]
$$

因此，同时排除全部单元素替代项会导致矛盾。

另一方面，只排除其中一部分又需要在彼此对称的选择之间作出任意取舍。

按照 IE 的定义，这些替代项不能被无辜排除。

其他子论域替代项都弱于相应的单元素替代项，因此同样不能被无辜排除。

所以：

$$
IE(S,\operatorname{Alt}(S))=\varnothing
$$

接下来考虑 II。

由于 IE 为空，所有替代项都可以尝试纳入。

令：

$$
r_1=r_2=r_3=r_4=\mathrm{False}
$$

此时，原句为真，而且所有子论域替代项也都为真。

因此，所有替代项可以同时被纳入而不产生矛盾。

于是：

$$
II(S,\operatorname{Alt}(S))
=
\operatorname{Alt}(S)
$$

证毕。

这里的关键与单一主体的情况完全一致：

**没有替代项能够被无辜排除，而所有替代项都能够被无辜纳入。**

#### 5. 应用 EXH

**命题 3（量化主体下的否定提升）**

在上述模型及替代项假设下：

$$
\begin{aligned}
&\operatorname{EXH}
\left[
\neg\exists x\in D_e\,
\forall w\in\operatorname{DOX}(x)\,r(w)
\right]\\
&\qquad\equiv
\forall x\in D_e\,
\forall w\in\operatorname{DOX}(x)\,\neg r(w)
\end{aligned}
$$

**证明：**

根据引理 3：

$$
IE=\varnothing
$$

$$
II=\operatorname{Alt}(S)
$$

因此，EXH 纳入所有子论域替代项。

尤其需要纳入四个单元素替代项：

$$
\begin{aligned}
\operatorname{EXH}(S)
\equiv{}&
q_{13}\land q_{14}
&\land q_{23}\land q_{24}
\end{aligned}
$$

这里省略了其他替代项，因为它们已经被这四个最强的替代项蕴含。

代入：

$$
\begin{aligned}
\operatorname{EXH}(S)
\equiv{}&
\neg(r_1\lor r_3)
&\land\neg(r_1\lor r_4)
&\land\neg(r_2\lor r_3)
&\land\neg(r_2\lor r_4)
\end{aligned}
$$

根据德摩根律：

$$
\begin{aligned}
\operatorname{EXH}(S)
\equiv{}&
(\neg r_1\land\neg r_3)
&\land(\neg r_1\land\neg r_4)
&\land(\neg r_2\land\neg r_3)
&\land(\neg r_2\land\neg r_4)
\end{aligned}
$$

化简得到：

$$
\operatorname{EXH}(S)
\equiv
\neg r_1\land\neg r_2\land\neg r_3\land\neg r_4
$$

这意味着：

$$
\forall w\in\operatorname{DOX}(x_1)\,\neg r(w)
$$

并且：

$$
\forall w\in\operatorname{DOX}(x_2)\,\neg r(w)
$$

因此：

$$
\operatorname{EXH}(S)
\equiv
\forall x\in D_e\,
\forall w\in\operatorname{DOX}(x)\,\neg r(w)
$$

证毕。

#### 6. 一般化与理论意义

上述证明使用了两个主体、每个主体两个信念世界的有限模型。

但是，关键机制并不依赖于这个特殊模型。

对于任意非空个体论域 $D_e$，假设每个主体的信念世界集合也非空，并允许选择函数为每个主体选择任意非空信念子论域。

那么所有单元素选择函数对应的替代项具有如下形式：

$$
\neg\exists x\in D_e\,r(g(x))
$$

其中：

$$
g(x)\in\operatorname{DOX}(x)
$$

这里将 $g$ 限制为每个主体选择一个世界的函数。

如果所有此类替代项都被纳入，就得到：

$$
\forall g\,
\neg\exists x\in D_e\,r(g(x))
$$

这等价于：

$$
\forall g\,
\forall x\in D_e\,\neg r(g(x))
$$

由于选择函数能够为任意主体选取其任意一个信念世界，因此：

$$
\forall g\,\forall x\in D_e\,\neg r(g(x))
\iff
\forall x\in D_e\,
\forall w\in\operatorname{DOX}(x)\,\neg r(w)
$$

于是，在所有相关替代项都被纳入的条件下，量化主体也可以产生否定提升。

### 五

关于`EXH`算子应用的条件，文章给出了其他说明。我选择详细介绍Jeretič的理论，因为`EXH`算子同样也用来解释自由选择、标量含意等一系列其他语言现象，比之前人更加统一，没有引入新的符号或定义，并且在复杂情况下表现良好。不过，这一理论当然也不是很完美，比如对于doubt等其他词的解释失效等等。不过收到笔者个人阅读量的限制，也只能介绍到这里了。

参考文献：

Bar-Lev, Moshe E., & Fox, Danny. (2020). Free choice, simplification, and Innocent Inclusion. *Natural Language Semantics*, 28(3), 175–223. [DOI: 10.1007/s11050-020-09162-y](https://doi.org/10.1007/s11050-020-09162-y).

Bartsch, Renate. (1973). “Negative Transportation” gibt es nicht. *Linguistische Berichte*, 27, 1–7. [书目记录（INIST–CNRS）](https://pascal-francis.inist.fr/vibad/index.php?action=getRecordDetail&idt=13108546).

Gajewski, Jon Robert. (2007). Neg-Raising and Polarity. *Linguistics and Philosophy*, 30(3), 289–328. [DOI: 10.1007/s10988-007-9020-z](https://doi.org/10.1007/s10988-007-9020-z).

Horn, Laurence R. (1989). *A natural history of negation*. Chicago: University of Chicago Press. [1989 年版书目记录](https://iucat.iu.edu/iub/2106266).

Jeretič, Paloma. (2022). Neg-raising with belief predicates as a scaleless implicature. In John R. Starr, Juhyae Kim, & Burak Öney (Eds.), *Proceedings of Semantics and Linguistic Theory 32 (SALT 32)* (pp. 891–914). Linguistic Society of America. [DOI: 10.3765/salt.v1i0.5367](https://doi.org/10.3765/salt.v1i0.5367).

Matticchio, Andrea. (2024). Neg-raising interacts with implicatures: The case of doubt. In Fausto Carcassi, Tamar Johnson, Søren Brinck Knudstorp, Sabina Domínguez Parrado, Pablo Rivas Robledo, & Giorgio Sbardolini (Eds.), *Proceedings of the 24th Amsterdam Colloquium* (pp. 248–255). Amsterdam: Institute for Logic, Language and Computation, University of Amsterdam. [论文页面](https://platform.openjournals.nl/PAC/article/view/21847).

Romoli, Jacopo. (2013). A scalar implicature-based approach to neg-raising. *Linguistics and Philosophy*, 36(4), 291–353. [DOI: 10.1007/s10988-013-9136-2](https://doi.org/10.1007/s10988-013-9136-2).
